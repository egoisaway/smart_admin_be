import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeviceBrandsController } from './device_brands.controller';
import { DeviceBrands } from './device_brands.entity/device_brands.entity';
import { DeviceBrandsService } from './device_brands.service';

@Module({
  imports:[TypeOrmModule.forFeature([DeviceBrands])],
  controllers: [DeviceBrandsController],
  providers: [DeviceBrandsService]
})
export class DeviceBrandsModule {}
