import { Body, Controller, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { PlatformsAccessService } from './platforms_access.service';

@Controller('platforms-access')
export class PlatformsAccessController {
    constructor(private readonly service: PlatformsAccessService){}

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

    @Get('/:id')
    async findById(@Res() response, @Param('id') id) {
        const row = await this.service.getOne(id);
        return response.status(HttpStatus.OK).json({
            row
        })
    }
}
