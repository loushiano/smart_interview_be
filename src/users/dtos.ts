import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class UserDTO {
  id: string;

  email: string;
  @IsNotEmpty()
  @IsString()
  fname: string;

  @IsNotEmpty()
  @IsString()
  lname: string;

  @IsString()
  password: string;

  @IsString()
  status: string;
}
