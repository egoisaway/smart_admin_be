import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lines } from './lines.entity/lines.entity';

@Injectable()
export class LinesService {
    constructor(
        @InjectRepository(Lines)
        private repository: Repository<Lines>
    ){}

    getAll(): Promise<Lines[]> {
        return this.repository.find();
    }

    getOne(id): Promise<Lines> {
        return this.repository.findOne(id);
    }

    create(client): Promise<Lines> {
        return this.repository.save(client);
    }
}
