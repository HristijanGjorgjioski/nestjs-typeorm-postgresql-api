import {
  IsEmail,
  IsOptional,
  IsString,
  Max,
  Min,
} from '@nestjs/class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Min(6)
  @Max(20)
  password: string;

  @IsOptional()
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;
}
