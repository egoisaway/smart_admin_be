import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RenovationsController } from './renovations.controller';
import { Renovations } from './renovations.entity/renovations.entity';
import { RenovationsService } from './renovations.service';

@Module({
  imports:[TypeOrmModule.forFeature([Renovations])],
  controllers: [RenovationsController],
  providers: [RenovationsService]
})
export class RenovationsModule {}
