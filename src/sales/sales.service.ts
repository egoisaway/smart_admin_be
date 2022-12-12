import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, IsNull, LessThan, LessThanOrEqual, MoreThan, MoreThanOrEqual, Not, Repository } from 'typeorm';
import { Sales } from './sales.entity/sales.entity';
import { Clients } from 'src/clients/clients.entity/clients.entity';
import { People } from 'src/people/people.entity/people.entity';
import { Contacts } from 'src/contacts/contacts.entity/contacts.entity';
import { SalesFull } from './sales.entity/salesfull.entity';
import { Lines } from 'src/lines/lines.entity/lines.entity';
import { Renovations } from 'src/renovations/renovations.entity/renovations.entity';

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

    update(params): any {
        return this.repository.findOne({where:{id:params.id}})
        .then(sale=>{
            sale.status_id = params.status_id;
            this.repository.save(sale)
            return '👍'
            }
        )   
    }

    find(params): Promise<SalesFull[]> {
        let date_start = params.where.date_start
        let date_end   = params.where.date_end
        delete params.where.date_start
        delete params.where.date_end

        if(date_start && date_end){
            params.where.created_at=Between(date_start,date_end)
        }else if(date_start && !date_end){
            params.where.created_at=MoreThanOrEqual(date_start)

        }else if(!date_start && date_end){
            params.where.created_at=LessThanOrEqual(date_end)
        }

        return this.view.find(params);
    }
    getFull(): Promise<SalesFull[]> {
        return this.view.find();
    }

    sing(params): any{
        
        // sorry. this was the best i could do without filling the console with errors.
        //upsert client
        return this.clientsRepository.upsert([params.client],["cnpj"])
        .then(client=>{
            //check if client had any updates or insert and get the id if the latter
            if (client.identifiers){
                !params.people[0].client_id   ? (params.people[0].client_id   = client.identifiers[0].id) : false
                !params.sale.client_id        ? (params.sale.client_id        = client.identifiers[0].id) : false
                !params.renovations.client_id ? (params.renovations.client_id = client.identifiers[0].id) : false 
            }else{
                !params.people[0].client_id   ? (params.people[0].client_id   = params.client.id)         : false
                !params.sale.client_id        ? (params.sale.client_id        = params.client.id)         : false
                !params.renovations.client_id ? (params.renovations.client_id = params.client.id)         : false 
            }
            //upsert person
            this.peopleRepository.upsert(params.people,["name"])
            .then(person=>{
                //check if contacts have relation with person
                if(!params.contacts[0].person_id){
                    person.identifiers? params.contacts.forEach((contact:any) => {contact.person_id = person.identifiers[0].id}) : params.contacts.forEach((contact:any) => {contact.person_id = params.people[0].id})
                }
                //upsert contacts
                this.contactsRepository.upsert(params.contacts,["contact"])

                //upsert sale
                this.repository.insert([params.sale])
                .then(sale=>{
                    //insert sale id into lines and renovations
                    params.lines.forEach((line:any) => {line.sale_id = sale.identifiers[0].id})
                    params.renovations.sale_id = sale.identifiers[0].id
                    //insert lines
                    this.linesRepository.insert(params.lines)
                    // insert renovations
                    params.renovations.quantity>0? this.renovationsRepository.insert(params.renovations) : false
                })
            })
            return '👍'
        })

    }
}
