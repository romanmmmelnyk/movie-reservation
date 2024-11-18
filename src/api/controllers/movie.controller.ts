import {Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Res} from "@nestjs/common";
import {ShowtimeService, MovieService} from "../../shared/services";
import {Movie} from "@prisma/client";
import { Response } from 'express';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService,
                private readonly showtimeService: ShowtimeService,) {
    }
    @Get()
    async findAll(): Promise<Movie[]> {
        return this.movieService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
        const movie = await this.movieService.findById(id);
        if (!movie) throw new HttpException('There is no movie with id ' + id, HttpStatus.BAD_REQUEST);
        return {status: 'success', message: 'There is the movie', movie}
    }
    @Get(':movieId/showtimes')
    findShowtimes(@Param('movieId') movieId: string) {
        return this.showtimeService.findShowtimes(parseInt(movieId));
    }
}