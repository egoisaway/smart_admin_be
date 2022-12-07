import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { RenovationTypesService } from './renovation_types.service';

@Controller('renovation-types')
export class RenovationTypesController {
    constructor(private readonly service: RenovationTypesService){}

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
