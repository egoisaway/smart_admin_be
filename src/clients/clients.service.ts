import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clients } from './clients.entity/clients.entity';

@Injectable()
export class ClientsService {
    constructor(
        @InjectRepository(Clients)
        private repository: Repository<Clients>
    ){}

    getAll(): Promise<Clients[]> {
        return this.repository.find();
    }

    getOne(id): Promise<Clients> {
        return this.repository.findOne(id);
    }

    create(client): Promise<Clients> {
        return this.repository.save(client);
    }
}
