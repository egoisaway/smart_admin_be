import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LineTypes } from './line_types.entity/line_types.entity';

@Injectable()
export class LineTypesService {
    constructor(
        @InjectRepository(LineTypes)
        private repository: Repository<LineTypes>
    ){}

    getAll(): Promise<LineTypes[]> {
        return this.repository.find();
    }

    getOne(id): Promise<LineTypes> {
        return this.repository.findOne(id);
    }

    create(client): Promise<LineTypes> {
        return this.repository.save(client);
    }
}
