import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusesController } from './statuses.controller';
import { Statuses } from './statuses.entity/statuses.entity';
import { StatusesService } from './statuses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Statuses])],
  controllers: [StatusesController],
  providers: [StatusesService]
})
export class StatusesModule {}
