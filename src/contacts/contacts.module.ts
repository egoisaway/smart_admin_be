import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsController } from './contacts.controller';
import { Contacts } from './contacts.entity/contacts.entity';
import { ContactsService } from './contacts.service';

@Module({
  imports:[TypeOrmModule.forFeature([Contacts])],
  controllers: [ContactsController],
  providers: [ContactsService]
})
export class ContactsModule {}
