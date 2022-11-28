import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sales } from './sales.entity/sales.entity';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(Sales)
        private repository: Repository<Sales>
    ){}

    getAll(): Promise<Sales[]> {
        return this.repository.find();
    }

    getOne(id): Promise<Sales> {
        return this.repository.findOne(id);
    }

    create(client): Promise<Sales> {
        return this.repository.save(client);
    }
}
