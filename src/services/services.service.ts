import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Services } from './services.entity/services.entity';

@Injectable()
export class ServicesService {
    constructor(
        @InjectRepository(Services)
        private repository: Repository<Services>
    ){}

    getAll(): Promise<Services[]> {
        return this.repository.find();
    }

    getOne(id): Promise<Services> {
        return this.repository.findOne(id);
    }

    create(client): Promise<Services> {
        return this.repository.save(client);
    }
}
