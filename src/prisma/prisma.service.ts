import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    constructor() {
        super();
        this.$use(async (params, next) => {
            if (params.model === 'Reservation' && params.action === 'create') {
                const seatPriceId = params.args.data.seatPriceId;

                // Отримати showtime.startTime, пов'язане з seatPriceId
                const seatPrice = await this.seatPrice.findUnique({
                    where: { id: seatPriceId },
                    include: { showtime: true },
                });

                if (seatPrice?.showtime) {
                    params.args.data.reservationTime = seatPrice.showtime.startTime;
                }
            }
            return next(params);
        });
    }
    async onModuleInit() {
        await this.$connect();
    }


    // async enableShutdownHooks(app: INestApplication) {
    //     this.$on("beforeExit", async () => {
    //         await app.close();
    //     });
    // }

    /**
     * Вызвать когда придет налоговая
     * */
    async resetDatabase() {
        return 'Lol really';
    }
}
