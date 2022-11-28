import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { States } from './states.entity/states.entity';

@Injectable()
export class StatesService {
    constructor(
        @InjectRepository(States)
        private repository: Repository<States>
    ){}

    getAll(): Promise<States[]> {
        return this.repository.find();
    }

    getOne(id): Promise<States> {
        return this.repository.findOne(id);
    }

    create(client): Promise<States> {
        return this.repository.save(client);
    }
}
