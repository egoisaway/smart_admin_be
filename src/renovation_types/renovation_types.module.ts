import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenovationTypesController } from './renovation_types.controller';
import { RenovationTypes } from './renovation_types.entity/renovation_types.entity';
import { RenovationTypesService } from './renovation_types.service';

@Module({
  imports:[TypeOrmModule.forFeature([RenovationTypes])],
  controllers: [RenovationTypesController],
  providers: [RenovationTypesService]
})
export class RenovationTypesModule {}
