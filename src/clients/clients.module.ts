import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsController } from './clients.controller';
import { Clients } from './clients.entity/clients.entity';
import { ClientsService } from './clients.service';

@Module({
  imports:[TypeOrmModule.forFeature([Clients])],
  controllers: [ClientsController],
  providers: [ClientsService]
})
export class ClientsModule {}
