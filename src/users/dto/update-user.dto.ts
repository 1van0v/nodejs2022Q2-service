import { IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(3)
  oldPassword: string;

  @IsString()
  @MinLength(3)
  newPassword: string;
}
