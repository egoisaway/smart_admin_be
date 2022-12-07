import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clients } from 'src/clients/clients.entity/clients.entity';
import { Contacts } from 'src/contacts/contacts.entity/contacts.entity';
import { People } from 'src/people/people.entity/people.entity';
import { SalesController } from './sales.controller';
import { Sales } from './sales.entity/sales.entity';
import { SalesFull } from './sales.entity/salesfull.entity';
import { SalesService } from './sales.service';

@Module({
  imports:[TypeOrmModule.forFeature([Sales,SalesFull,Clients,Contacts,People])],
  controllers: [SalesController],
  providers: [SalesService]
})
export class SalesModule {}
