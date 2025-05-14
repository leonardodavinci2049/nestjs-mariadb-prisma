import { IsString, IsEmail, MinLength, IsOptional, IsDateString, IsEnum } from "class-validator";
import { RoleEnum } from "src/core/enums/role.enum";

export class CreateUserDTO {

    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsOptional()
    @IsDateString()
    birthAt: Date;

    @IsOptional()
    @IsEnum(RoleEnum)
    role: number;

     @IsOptional()
    createdAt: Date;

     @IsOptional()
    updatedAt: Date;
r
}