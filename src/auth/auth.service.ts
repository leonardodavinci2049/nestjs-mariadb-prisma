import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { UsersService } from 'src/users/users.service';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthLoginDTO } from './dto/auth-login.dto';
import { getMd5 } from 'src/core/utils/generators/get_md5';
import { PrismaService } from 'src/core/prisma/prisma.service';
import { ResultModel } from 'src/core/utils/result.model';
import { RoleEnum } from 'src/core/enums/role.enum';

@Injectable()
export class AuthService {
  private issuer = 'webservice';
  private audience = 'user';

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  createToken(id: number) {
    return {
      accessToken: this.jwtService.sign(
        {
          //Payload
          id: id,
          username: 'user.name',
          // Removed because user.role does not exist
        },
        {
          //options
          expiresIn: '7 days',
          subject: id ? id.toString() : '19372846',
          issuer: this.issuer,
          audience: this.audience,
        },
      ),
    };
  }

  checkToken(token: string) {
    try {
      const data = this.jwtService.verify(token, {
        issuer: this.issuer, //verifica se o token foi emitido pelo servidor
        audience: this.audience, // verifica se o token é para o usuário
      });

      return data;
    } catch (e) {
      throw new BadRequestException(e);
    }
  }

  isValidToken(token: string) {
    // rota que válida o token
    try {
      this.checkToken(token);
    } catch (e) {
      throw new UnauthorizedException(e);
    }

    return true;
  }

  async validateUser(payload: any) {
    return await this.prisma.tbl_user.findFirst({
      where: {
        id: payload.id,
      },
    });
  }

  async register(useRegister: AuthRegisterDTO) {
    const user = await this.userService.create(useRegister);

    return this.createToken(user.id);
  }

  async login(login: string, email: string, password: string) {
    const userLogin = await this.prisma.tbl_user.findFirst({
      where: {
        email: email,
        password: getMd5(password),
      },
    });

    if (!userLogin) {
      throw new UnauthorizedException('Login e/ou Senha Incorretos.');
    }

    //  if (!await bcrypt.compare(password, userLogin.SENHA)) {
    // throw new UnauthorizedException('E-mail e/ou senha incorretos.');
    //}

    return this.createToken(userLogin.id);
    //return this.createToken(user);
  }

  async signIn(loginAuthDto: AuthLoginDTO) {
    const password = getMd5(loginAuthDto.password);

    //console.log(loginAuthDto.LOGIN, loginAuthDto.SENHA);
    const resultData = await this.prisma.tbl_user.findFirst({
      where: {
        email: loginAuthDto.email,
        password: password,
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!resultData) {
      return new ResultModel(
        100401,
        'Login e/ou Senha Incorretos.',
        0,
        'Unauthorized',
      );
    }
    const token = this.createToken(resultData.id);

    return new ResultModel(
      100200,
      ` id: ${resultData.id}`,
      resultData.id,
      resultData,
      1,
      token.accessToken,
    );
  }

  async forget(email: string) {
    const user = await this.prisma.tbl_user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Email incorreto');
    }

    /*   
    const token = this.jwtService.sign({
      id: user.ID_SYSTEM_CFG_CLIENTE
  }, {
      expiresIn: "30 minutes",
      subject: String(user.ID_SYSTEM_CFG_CLIENTE),
      issuer: 'forget',
      audience: 'users',
  }); */
    /* 
  await this.mailer.sendMail({
      subject: 'Recuperação de Senha',
      to: 'joao@hcode.com.br',
      template: 'forget',
      context: {
          name: user.name,
          token
      }
  }); */

    return true;
  }

  async reset(password: string, token: string) {
    // To do: implementar a verificação do token
    try {
      const data: any = this.jwtService.verify(token, {
        issuer: this.issuer,
        audience: this.audience,
      });

      if (isNaN(Number(data.id))) {
        throw new BadRequestException('Token é inválido.');
      }

      const salt = await bcrypt.genSalt();
      password = await bcrypt.hash(password, salt);

      const userPasswordReset = await this.prisma.tbl_user.update({
        where: {
          id: Number(data.id),
        },
        data: {
          password: password,
        },
      });
      return this.createToken(data.i);
    } catch (e) {
      throw new BadRequestException(e);
    }
  }
}
