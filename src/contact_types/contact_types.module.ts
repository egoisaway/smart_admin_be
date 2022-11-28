import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactTypesController } from './contact_types.controller';
import { ContactTypes } from './contact_types.entity/contact_types.entity';
import { ContactTypesService } from './contact_types.service';

@Module({
  imports:[TypeOrmModule.forFeature([ContactTypes])],
  controllers: [ContactTypesController],
  providers: [ContactTypesService]
})
export class ContactTypesModule {}
