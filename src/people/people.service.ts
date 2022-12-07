import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from './people.entity/people.entity';
import { PeopleFull } from './people.entity/peoplefull.entity';

@Injectable()
export class PeopleService {
    constructor(
        @InjectRepository(People)
        private repository: Repository<People>,
        @InjectRepository(PeopleFull)
        private view: Repository<PeopleFull>
    ){}

    getAll(): Promise<People[]> {
        return this.repository.find();
    }

    find(params): Promise<PeopleFull[]> {
        return this.view.find(params);
    }

    create(client): Promise<People> {
        return this.repository.save(client);
    }
}
