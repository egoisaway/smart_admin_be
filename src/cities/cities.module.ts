import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CitiesController } from './cities.controller';
import { Cities } from './cities.entity/cities.entity';
import { CitiesService } from './cities.service';

@Module({
  imports:[TypeOrmModule.forFeature([Cities])],
  controllers: [CitiesController],
  providers: [CitiesService]
})
export class CitiesModule {}
