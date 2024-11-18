import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../prisma/prisma.service";
import {Movie} from '@prisma/client'

@Injectable()
export class ShowtimeService {
    constructor(private prisma: PrismaService) {}

    findShowtimes(movieId: number) {
        const where = {
            where: {
                movieId,
            }
        }
        return this.prisma.showtime.findMany(where)
    }
}