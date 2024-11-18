import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {PrismaService} from "../../prisma/prisma.service";
import {ReservationStatus} from '@prisma/client'

@Injectable()
export class ReservationService {
    constructor(private readonly prisma: PrismaService) {}
    async makeReservation(dto) {
        const {name, phone, seatPriceId} = dto;
        const seatPrice = await this.prisma.seatPrice.findUnique({where: {id: seatPriceId}});
        if (!seatPrice) throw new HttpException('There is no seatPrice with id ' + seatPriceId, HttpStatus.BAD_REQUEST);
        return this.prisma.reservation.create({
            data: {
                customerName: name,
                customerPhone: phone,
                seatPriceId,
                status: ReservationStatus.reserved
            },
        })
    }
}