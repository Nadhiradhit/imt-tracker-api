import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class loginDto {
    @IsString(
        {message: 'Email must be a string'}
    )
    @IsEmail()
    email!: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, {
        message: 'Password must be at least 8 characters long',
    })
    password!: string;
}