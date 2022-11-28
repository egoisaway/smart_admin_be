import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RenovationTypes } from './renovation_types.entity/renovation_types.entity';

@Injectable()
export class RenovationTypesService {
    constructor(
        @InjectRepository(RenovationTypes)
        private repository: Repository<RenovationTypes>
    ){}

    getAll(): Promise<RenovationTypes[]> {
        return this.repository.find();
    }

    getOne(id): Promise<RenovationTypes> {
        return this.repository.findOne(id);
    }

    create(client): Promise<RenovationTypes> {
        return this.repository.save(client);
    }
}
