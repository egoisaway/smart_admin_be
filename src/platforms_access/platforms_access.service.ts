import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlatformsAccess } from './platforms_access.entity/platforms_access.entity';
import { PlatformsAccessFull } from './platforms_access.entity/platforms_access_full.entity';

@Injectable()
export class PlatformsAccessService {
    constructor(
        @InjectRepository(PlatformsAccess)
        private repository: Repository<PlatformsAccess>,

        @InjectRepository(PlatformsAccessFull)
        private view: Repository<PlatformsAccessFull>
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
    find(params): Promise<PlatformsAccessFull[]> {
        return this.view.find(params);
    }
}
