import {
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { RoleEnum } from 'src/core/enums/role.enum';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';

export class AuthRegisterDTO {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsUUID(4, { message: 'ID_UUID must be a valid UUIDv4' })
  uuid: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  birthAt: Date;

  @IsOptional()
  @IsEnum(RoleEnum)
  role: RoleEnum;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;
}
