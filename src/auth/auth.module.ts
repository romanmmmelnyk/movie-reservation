import {Module} from "@nestjs/common";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import * as process from "node:process";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {PrismaService} from "../prisma/prisma.service";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: {expiresIn: '15m'}
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, PrismaService],
})
export class AuthModule {}