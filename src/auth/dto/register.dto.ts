import { loginDto } from './login.dto.js';
import { IsNotEmpty, IsString } from 'class-validator';


export class registerDto extends loginDto {
    @IsString()
    @IsNotEmpty()
    name!: string;
}

