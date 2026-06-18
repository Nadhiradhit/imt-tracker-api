import { IsString, MaxLength, IsUrl, IsOptional } from "class-validator";

export class CreateProfileDto {
    @IsOptional()
    @IsString()
    @MaxLength(200,
        {
            message: 'Bio must be 200 characters or less',
        }
    )
    bio!: string;

    @IsOptional()
    @IsUrl()
    picture!: string;
}
