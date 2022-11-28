import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactTypes } from './contact_types.entity/contact_types.entity';

@Injectable()
export class ContactTypesService {
    constructor(
        @InjectRepository(ContactTypes)
        private repository: Repository<ContactTypes>
    ){}

    getAll(): Promise<ContactTypes[]> {
        return this.repository.find();
    }

    getOne(id): Promise<ContactTypes> {
        return this.repository.findOne(id);
    }

    create(client): Promise<ContactTypes> {
        return this.repository.save(client);
    }
}
