import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from './people.entity/people.entity';

@Injectable()
export class PeopleService {
    constructor(
        @InjectRepository(People)
        private repository: Repository<People>
    ){}

    getAll(): Promise<People[]> {
        return this.repository.find();
    }

    getOne(id): Promise<People> {
        return this.repository.findOne(id);
    }

    create(client): Promise<People> {
        return this.repository.save(client);
    }
}
