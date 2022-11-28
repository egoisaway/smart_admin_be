import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plans } from './plans.entity/plans.entity';

@Injectable()
export class PlansService {
    constructor(
        @InjectRepository(Plans)
        private repository: Repository<Plans>
    ){}

    getAll(): Promise<Plans[]> {
        return this.repository.find();
    }

    getOne(id): Promise<Plans> {
        return this.repository.findOne(id);
    }

    create(client): Promise<Plans> {
        return this.repository.save(client);
    }
}
