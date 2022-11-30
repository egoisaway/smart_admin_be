import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { Clients } from './clients.entity/clients.entity';
import { ClientsFull } from './clients.entity/clientsfull.entity';
import { ClientsService } from './clients.service';

@Module({
  imports:[TypeOrmModule.forFeature([Clients,ClientsFull])],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
