import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  //
  @IsEmail()
  email: string;
  //
  @IsEnum(['1B', '2B', 'C', 'CF', 'SS'], {
    message: 'Hey asshole, mind the pipe rules!',
  })
  position: string;
  //
  @IsEnum(['PLAYER', 'COACH'], {
    message: 'Valid role required.',
  })
  role: string;
}
