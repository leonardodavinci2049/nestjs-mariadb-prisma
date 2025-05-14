import {
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
  IsDateString,
  IsEnum,
  IsUUID,
  IsInt,
} from 'class-validator';
import { Timestamp } from 'rxjs';
import { RoleEnum } from 'src/core/enums/role.enum';
import { UUIDTypes } from 'uuid';

export class CreateUserDTO {
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
  role: number;

  @IsOptional()
  createdAt: Date;

  @IsOptional()
  updatedAt: Date;
}
