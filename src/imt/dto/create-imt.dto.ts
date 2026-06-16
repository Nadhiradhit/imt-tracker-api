import { IsDecimal, IsString } from "class-validator";

export class CreateImtDto {
    
    @IsDecimal({ decimal_digits: '1,2' })
    height!: number;

    @IsDecimal({ decimal_digits: '1,2' })
    weight!: number;

    
    bmi!: number;
}
