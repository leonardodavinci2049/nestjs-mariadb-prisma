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

@Injectable()
export class AuthService {
  private issuer = 'webservice';
  private audience = 'user';

  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerAuthDto: AuthRegisterDTO) {
   // const userRegister = await this.userService.create(registerAuthDto);

  }


  async signIn(loginAuthDto: AuthLoginDTO) {
 


    return true;
  }

  async reset(password: string, token: string) {
    
  }

  createToken(user: AuthRegisterDTO) {
   return true;
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

  checkToken(token: string) {
  
      return true;
    
  }

 validateUser(payload: any) {
    

  }

  }
