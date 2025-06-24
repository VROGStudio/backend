import { IsEmail, IsNotEmpty, Length } from 'class-validator';
export class RegisterUserDto {
  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @IsNotEmpty()
  @Length(3, 50)
  surname: string;

  @IsEmail()
  email: string;
}
