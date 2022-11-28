import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LineTypesController } from './line_types.controller';
import { LineTypes } from './line_types.entity/line_types.entity';
import { LineTypesService } from './line_types.service';

@Module({
  imports:[TypeOrmModule.forFeature([LineTypes])],
  controllers: [LineTypesController],
  providers: [LineTypesService]
})
export class LineTypesModule {}
