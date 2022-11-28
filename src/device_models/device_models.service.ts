import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeviceModels } from './device_models.entity/device_models.entity';

@Injectable()
export class DeviceModelsService {
    constructor(
        @InjectRepository(DeviceModels)
        private repository: Repository<DeviceModels>
    ){}

    getAll(): Promise<DeviceModels[]> {
        return this.repository.find();
    }

    getOne(id): Promise<DeviceModels> {
        return this.repository.findOne(id);
    }

    create(client): Promise<DeviceModels> {
        return this.repository.save(client);
    }
}
