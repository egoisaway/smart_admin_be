import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesController } from './sales.controller';
import { Sales } from './sales.entity/sales.entity';
import { SalesFull } from './sales.entity/salesfull.entity';
import { SalesService } from './sales.service';

@Module({
  imports:[TypeOrmModule.forFeature([Sales,SalesFull])],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
