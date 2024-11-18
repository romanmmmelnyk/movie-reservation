import {Body, Controller, Post} from "@nestjs/common";
import {MakeReservationDto} from "./dto/make-reservation.dto";
import {ReservationService} from "../../shared/services/reservation.service";

@Controller('reservations')
export class ReservationController {
    constructor(private service: ReservationService) {
    }
    @Post('')
    makeReservation(@Body() body: MakeReservationDto) {
        return this.service.makeReservation(body);
    }
}