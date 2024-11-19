import {IsNotEmpty, IsPhoneNumber, IsString} from "class-validator";

export class AuthPhoneDto {
    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;
}
export class FIllProfileDto {
    @IsNotEmpty()
    @IsString()
    password: string;
    @IsNotEmpty()
    @IsString()
    firstName: string;
    @IsNotEmpty()
    @IsString()
    lastName: string;
}