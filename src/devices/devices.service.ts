import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Devices } from './devices.entity/devices.entity';

@Injectable()
export class DevicesService {
    constructor(
        @InjectRepository(Devices)
        private repository: Repository<Devices>
    ){}

    getAll(): Promise<Devices[]> {
        return this.repository.find();
    }

    getOne(id): Promise<Devices> {
        return this.repository.findOne(id);
    }

    create(client): Promise<Devices> {
        return this.repository.save(client);
    }
}
