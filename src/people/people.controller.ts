import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
    constructor(private readonly service: PeopleService){}

    @Post()
    async create(@Res() response, @Body() data) {
        const newRow = await this.service.create(data);
        return response.status(HttpStatus.CREATED).json({
            newRow
        })
    }

    @Get()
    async fetchAll(@Res() response) {
        const rows = await this.service.getAll();
        return response.status(HttpStatus.OK).json({
            rows
        })
    }

    @Post('/find')
    async find(@Res() response, @Body() params) {
        const rows = await this.service.find(params);
        return response.status(HttpStatus.OK).json({
            rows
        })
    }
}
