import { ParamId } from 'src/core/decorators/param-id.decorator';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  UseGuards,
  Patch,
} from '@nestjs/common';

import { UsersService } from './users.service';

import { getMd5 } from 'src/core/utils/generators/get_md5';
//import { AuthGuard } from 'src/core/guards/auth.guard';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { CreateUserDTO } from './dto/create-user.dto';
import path from 'path';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('v1/insert')
  create(@Body() body: CreateUserDTO) {
    return this.userService.create(body);
  }

  @Post('v1/getMd5')
  getMt5(@Body() date: { str: string }) {
    return getMd5(date.str);
  }

  //@UseGuards(AuthGuard)
  @Get('v1/findMany')
  findAll() {
    // return this.usersService.findAll();
    return this.userService.findAll();
  }

  //@UseGuards(AuthGuard)
  @Get('v1/findOne/:id')
  findOne(@ParamId() id: number) {
    return this.userService.findOne(id);
  }
  //@UseGuards(AuthGuard)
  @Put('v1/updateAny/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdatePutUserDTO,
  ) {
    return this.userService.update(id, updateUserDto);
  }

@Patch('v1/updatepartial/:id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdatePutUserDTO,
  ) {
    return this.userService.updatePartial(id, updateUserDto);
  }


  //@UseGuards(AuthGuard)
  @Delete('v1/deleteOne/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.userService.remove(id);
  }
}
