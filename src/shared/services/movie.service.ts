import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../prisma/prisma.service";
import {Movie} from '@prisma/client'
import {DateTimeService} from "./datetime.service";

@Injectable()
export class MovieService {
    constructor(private prisma: PrismaService) {}

    findAll(): Promise<Movie[]> {
        return this.prisma.movie.findMany();
    }

    findById(id: number) {
        return this.prisma.movie.findUnique({
            where: {
                id,
            }
        })
    }
}