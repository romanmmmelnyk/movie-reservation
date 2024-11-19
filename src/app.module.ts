import { Module } from '@nestjs/common';
import {ApiModule} from "./api/api.module";
import {PrismaModule} from "./prisma/prisma.module";
import {AuthModule} from "./auth/auth.module";
@Module({
  imports: [ApiModule, PrismaModule, AuthModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
