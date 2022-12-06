import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sales } from './sales.entity/sales.entity';
import { SalesFull } from './sales.entity/salesfull.entity';

@Injectable()
export class SalesService {
    constructor(
        @InjectRepository(Sales)
        private repository: Repository<Sales>,

        @InjectRepository(SalesFull)
        private view: Repository<SalesFull>
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
}
