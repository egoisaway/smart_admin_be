import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clients } from './clients.entity/clients.entity';
import { ClientsFull } from './clients.entity/clientsfull.entity';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Clients)
        private repository: Repository<Clients>,

        @InjectRepository(ClientsFull)
        private view: Repository<ClientsFull>
    ){}

    getAll(): Promise<Clients[]> {
        return this.repository.find();
    }

    
    create(client): Promise<Clients> {
        return this.repository.save(client);
    }
    
    find(params): Promise<ClientsFull[]> {
        return this.view.find(params);
    }
    getFull(): Promise<ClientsFull[]> {
        return this.view.find();
    }
}
