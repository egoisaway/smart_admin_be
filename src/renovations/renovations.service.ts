import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Renovations } from './renovations.entity/renovations.entity';

@Injectable()
export class RenovationsService {
    constructor(
        @InjectRepository(Renovations)
        private repository: Repository<Renovations>
    ){}

    getAll(): Promise<Renovations[]> {
        return this.repository.find();
    }

    getOne(id): Promise<Renovations> {
        return this.repository.findOne(id);
    }

    create(client): Promise<Renovations> {
        return this.repository.save(client);
    }
}
