import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sales } from './sales.entity/sales.entity';
import { Clients } from 'src/clients/clients.entity/clients.entity';
import { People } from 'src/people/people.entity/people.entity';
import { Contacts } from 'src/contacts/contacts.entity/contacts.entity';
import { SalesFull } from './sales.entity/salesfull.entity';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(Sales)
        private repository: Repository<Sales>,

        @InjectRepository(SalesFull)
        private view: Repository<SalesFull>,

        @InjectRepository(Clients)
        private clientsRepository: Repository<Clients>,
        @InjectRepository(People)
        private peopleRepository: Repository<People>,
        @InjectRepository(Contacts)
        private contactsRepository: Repository<Contacts>
    ){}

    getAll(): Promise<Sales[]> {
        return this.repository.find();
    }

    create(client): Promise<Sales> {
        return this.repository.save(client);
    }

    find(params): Promise<SalesFull[]> {
        return this.view.find(params);
    }
    getFull(): Promise<SalesFull[]> {
        return this.view.find();
    }

    sing(params): any{

        // this.repository
        // .createQueryBuilder().insert().into(Clients)
        // .values([params.client])
        // .orUpdate(['cnpj'],['name'])
        // .execute()
        
        // this.repository
        // .createQueryBuilder().insert().into(People)
        // .values(params.people)
        // .orUpdate(['name'],['cpf','job'])
        // .execute()

        // this.repository
        // .createQueryBuilder().insert().into(Contacts)
        // .values(params.contacts)
        // .orUpdate(['contact'],['person_id'])
        // .execute()

        // this.repository
        // .createQueryBuilder().insert().into(Sales)
        // .values([params.sale])
        // .execute()
        
        this.clientsRepository.upsert([params.client],["cnpj"])
        this.peopleRepository.upsert(params.people,["name"])
        this.contactsRepository.upsert(params.contacts,["contact"])
        this.repository.insert([params.sale])

        return 'ok'
    }
}
