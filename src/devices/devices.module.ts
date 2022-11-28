import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevicesController } from './devices.controller';
import { Devices } from './devices.entity/devices.entity';
import { DevicesService } from './devices.service';

@Module({
  imports:[TypeOrmModule.forFeature([Devices])],
  controllers: [DevicesController],
  providers: [DevicesService]
})
export class DevicesModule {}
