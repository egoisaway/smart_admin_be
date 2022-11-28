import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cities } from './cities.entity/cities.entity';

@Injectable()
export class CitiesService {
    constructor(
        @InjectRepository(Cities)
        private repository: Repository<Cities>
    ){}

    getAll(): Promise<Cities[]> {
        return this.repository.find();
    }

    getOne(id): Promise<Cities> {
        return this.repository.findOne(id);
    }

    create(client): Promise<Cities> {
        return this.repository.save(client);
    }
}
