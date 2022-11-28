import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlatformsAccess } from './platforms_access.entity/platforms_access.entity';

@Injectable()
export class PlatformsAccessService {
    constructor(
        @InjectRepository(PlatformsAccess)
        private repository: Repository<PlatformsAccess>
    ){}

    getAll(): Promise<PlatformsAccess[]> {
        return this.repository.find();
    }

    getOne(id): Promise<PlatformsAccess> {
        return this.repository.findOne(id);
    }

    create(client): Promise<PlatformsAccess> {
        return this.repository.save(client);
    }
}
