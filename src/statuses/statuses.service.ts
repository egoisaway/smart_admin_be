import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Statuses } from './statuses.entity/statuses.entity';

@Injectable()
export class StatusesService {
    constructor(
        @InjectRepository(Statuses)
        private repository: Repository<Statuses>,

        @InjectRepository(Statuses)
        private view: Repository<Statuses>
    ){}

    getAll(): Promise<Statuses[]> {
        return this.repository.find();
    }

    create(client): Promise<Statuses> {
        return this.repository.save(client);
    }
    find(params): Promise<Statuses[]> {
        return this.view.find(params);
    }
}
