import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PeopleJobs } from './people_jobs.entity/people_jobs.entity';

@Injectable()
export class PeopleJobsService {
    constructor(
        @InjectRepository(PeopleJobs)
        private repository: Repository<PeopleJobs>
    ){}

    getAll(): Promise<PeopleJobs[]> {
        return this.repository.find();
    }

    getOne(id): Promise<PeopleJobs> {
        return this.repository.findOne(id);
    }

    create(client): Promise<PeopleJobs> {
        return this.repository.save(client);
    }
}
