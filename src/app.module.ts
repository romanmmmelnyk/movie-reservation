import { Module } from '@nestjs/common';
import {ApiModule} from "./api/api.module";
import {PrismaModule} from "./prisma/prisma.module";
@Module({
  imports: [ApiModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
