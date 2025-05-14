import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as UuidV4 } from 'uuid';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { getMd5 } from 'src/core/utils/generators/get_md5';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDTO) {
    const olUUID = UuidV4();
    const password = getMd5(createUserDto.password);

    const offset = new Date().getTimezoneOffset() * 60000;
    createUserDto.createdAt = new Date(Date.now() - offset);
    createUserDto.updatedAt = new Date(Date.now() - offset);
    createUserDto.birthAt = new Date(Date.now() - offset);

    const user = await this.prisma.tbl_user.create({
      data: {
        uuid: olUUID,
        email: createUserDto.email,
        name: createUserDto.name,
        password: password,
        createdAt: createUserDto.createdAt,
        updatedAt: createUserDto.updatedAt,
        birthAt: createUserDto.birthAt,
      },
      select: {
        id: true,
        uuid: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return user;
  }

  async findAll() {
    try {
      const users = await this.prisma.tbl_user.findMany({
        where: {
          email: {
            contains: '@',
          },
        },
        take: 10,
        orderBy: {
          createdAt: 'desc',
        },
        select: {
          id: true,
          email: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      });
      return users;
    } catch (err) {
      console.log(err);
    } finally {
      console.log('FECHOU A CONEXÃO 1');
    }
  }

  async findOne(id: number) {
    const user = await this.prisma.tbl_user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      throw new NotFoundException(`O usuário ${id} não foi encontrado.`);
    }

    return user;
    //there is the option to use findFirst or findMany but findUnique is more performant
  }

  async update(id: number, data: UpdatePutUserDTO) {

   await this.userExists(id);

    if (data.password) {
      data.password = getMd5(data.password);
    }
   const resultUpdate = await this.prisma.tbl_user.update({
      where: {
        id: id,
      },
      data: {
        email: data.email,
        name: data.name,
        password: data.password,

        updatedAt: new Date(),
      },
    });


    return resultUpdate;
  }

  async updatePartial(id: number, data: UpdatePutUserDTO) {
    await this.userExists(id);

    if (data.password) {
      data.password = getMd5(data.password);
    }

    const resultUpdate = await this.prisma.tbl_user.update({
      where: {
        id: id,
      },
      data: data,
    });

    return resultUpdate;
  }

  async remove(id: number) {
    await this.userExists(id);

    return this.prisma.tbl_user.delete({
      where: {
        id: id,
      },
    });
  }

  async userExists(id: number) {
    const user = await this.prisma.tbl_user.count({
      where: {
        id: id,
      },
    });

    if (!user) {
      throw new NotFoundException(`O usuário ${id} não foi encontrado.`);
    }
  }
}
