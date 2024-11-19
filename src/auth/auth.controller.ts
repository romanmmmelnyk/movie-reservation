import {Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {AuthPhoneDto} from "./auth.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}
    @Post('mobile')
    async mobile(@Body() {phone}: AuthPhoneDto) {
        const user = await this.authService.findUserByPhone(phone);
        if (user) throw new HttpException('User with phone ' + phone + ' already exist', HttpStatus.BAD_REQUEST);
        return this.authService.createUser(phone)
    }
    @Get('verify/:code')
    verify(@Param('code') code: string) {
        return this.authService.verify(code);
    }
    @Patch(':id')
    fillProfile(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
        return this.authService.fillProfile(body, id);
    }
}