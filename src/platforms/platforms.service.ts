import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Platforms } from './platforms.entity/platforms.entity';

@Injectable()
export class PlatformsService {
    constructor(
        @InjectRepository(Platforms)
        private repository: Repository<Platforms>
    ){}

    getAll(): Promise<Platforms[]> {
        return this.repository.find();
    }

    getOne(id): Promise<Platforms> {
        return this.repository.findOne(id);
    }

    create(client): Promise<Platforms> {
        return this.repository.save(client);
    }
}
