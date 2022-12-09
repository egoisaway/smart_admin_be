import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Not, Repository } from 'typeorm';
import { Sales } from './sales.entity/sales.entity';
import { Clients } from 'src/clients/clients.entity/clients.entity';
import { People } from 'src/people/people.entity/people.entity';
import { Contacts } from 'src/contacts/contacts.entity/contacts.entity';
import { SalesFull } from './sales.entity/salesfull.entity';
import { Lines } from 'src/lines/lines.entity/lines.entity';
import { Renovations } from 'src/renovations/renovations.entity/renovations.entity';
import { notDeepEqual } from 'assert';

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
        private contactsRepository: Repository<Contacts>,
        @InjectRepository(Lines)
        private linesRepository: Repository<Lines>,
        @InjectRepository(Renovations)
        private renovationsRepository: Repository<Renovations>
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
        
        //upsert and gets data if the addition is new
        this.clientsRepository.upsert([params.client],["cnpj"])
        let client:any  = this.clientsRepository.findOne({where:{cnpj:params.client.cnpj},order:{id:'DESC'}})
        
        params.people[0].client_id   == null? params.people.forEach((person:any)    => {person.client_id = client.id})  : false 
        this.peopleRepository.upsert(params.people,["name"])
        let person:any  = this.peopleRepository.findOne({where:{job:1,client_id:params.client.cnpj},order:{id:'DESC'}})
        
        params.contacts[0].person_id == null? params.contacts.forEach((contact:any) => {contact.person_id = person.id}) : false
        this.contactsRepository.upsert(params.contacts,["contact"])
        
        params.sale.client_id        == null? params.sale.forEach((sale:any)        => {sale.client_id    = client.id}) : false
        params.sale.person_id        == null? params.sale.forEach((sale:any)        => {sale.person_id    = person.id}) : false
        this.repository.insert([params.sale])
        
        
        //renovations and lines declarations
        let sale:any  = this.repository.findOne({where:{client_id:client.id},order:{id:'DESC'}})

        //sale_id for lines
        params.lines.forEach((line:any) => {line.sale_id = sale.id})
        this.linesRepository.insert(params.lines)

        params.renovations.client_id == null? params.renovations.client_id=client.id : false 
        params.renovations.sale_id = sale.id
        this.renovationsRepository.insert(params.renovations)

        return 'ok'
    }
}
