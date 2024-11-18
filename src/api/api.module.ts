import {Module} from "@nestjs/common";
import * as controllers from './controllers';
import {PrismaService} from "../prisma/prisma.service";
import {MovieService} from "../shared/services/movie.service";
import {ShowtimeService} from "../shared/services";
import {ReservationService} from "../shared/services/reservation.service";

@Module({
    imports: [],
    controllers: Object.values(controllers),
    providers: [PrismaService,  MovieService, ShowtimeService, ReservationService],
})
export class ApiModule {}