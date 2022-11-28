import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceBrands } from './device_brands.entity/device_brands.entity';

@Injectable()
export class DeviceBrandsService {
    constructor(
        @InjectRepository(DeviceBrands)
        private repository: Repository<DeviceBrands>
    ){}

    getAll(): Promise<DeviceBrands[]> {
        return this.repository.find();
    }

    getOne(id): Promise<DeviceBrands> {
        return this.repository.findOne(id);
    }

    create(client): Promise<DeviceBrands> {
        return this.repository.save(client);
    }
}
