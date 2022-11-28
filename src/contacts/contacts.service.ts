import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contacts } from './contacts.entity/contacts.entity';

@Injectable()
export class ContactsService {
    constructor(
        @InjectRepository(Contacts)
        private repository: Repository<Contacts>
    ){}

    getAll(): Promise<Contacts[]> {
        return this.repository.find();
    }

    getOne(id): Promise<Contacts> {
        return this.repository.findOne(id);
    }

    create(client): Promise<Contacts> {
        return this.repository.save(client);
    }
}
