import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
    constructor(private readonly service: SalesService){}

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

    @Get('/full')
    async fetchFull(@Res() response) {
        const rows = await this.service.getFull();
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

    @Post('/sing')
    async sing(@Res() response, @Body() params) {
        const res = await this.service.sing(params);
        return response.status(HttpStatus.OK).json({
            res
        })
    }
}
