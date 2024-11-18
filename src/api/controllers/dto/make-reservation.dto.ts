import {IsNotEmpty, IsNumber, IsPhoneNumber, IsString} from "class-validator";

export class MakeReservationDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string;
    @IsNotEmpty()
    @IsPhoneNumber()
    readonly phone: string;
    @IsNotEmpty()
    @IsNumber()
    seatPriceId: number;
}