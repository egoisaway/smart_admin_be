import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceModelsController } from './device_models.controller';
import { DeviceModels } from './device_models.entity/device_models.entity';
import { DeviceModelsService } from './device_models.service';

@Module({
  imports:[TypeOrmModule.forFeature([DeviceModels])],
  controllers: [DeviceModelsController],
  providers: [DeviceModelsService]
})
export class DeviceModelsModule {}
