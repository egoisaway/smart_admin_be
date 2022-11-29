import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { StatesModule } from './states/states.module';
import { ServicesModule } from './services/services.module';
import { SalesModule } from './sales/sales.module';
import { RenovationsModule } from './renovations/renovations.module';
import { RenovationTypesModule } from './renovation_types/renovation_types.module';
import { PlatformsAccessModule } from './platforms_access/platforms_access.module';
import { PlatformsModule } from './platforms/platforms.module';
import { PlansModule } from './plans/plans.module';
import { PeopleModule } from './people/people.module';
import { LinesModule } from './lines/lines.module';
import { LineTypesModule } from './line_types/line_types.module';
import { DevicesModule } from './devices/devices.module';
import { DeviceModelsModule } from './device_models/device_models.module';
import { DeviceBrandsModule } from './device_brands/device_brands.module';
import { ContactsModule } from './contacts/contacts.module';
import { ContactTypesModule } from './contact_types/contact_types.module';
import { ClientsModule } from './clients/clients.module';
import { CitiesModule } from './cities/cities.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "root",
      "database": "smart_admin",
      "entities": [join(__dirname, '**', '*.entity.{ts,js}')],
      "synchronize": false
    }),
    StatesModule,
    ServicesModule,
    SalesModule,
    RenovationsModule,
    RenovationTypesModule,
    PlatformsAccessModule,
    PlatformsModule,
    PlansModule,
    PeopleModule,
    LinesModule,
    LineTypesModule,
    DevicesModule,
    DeviceModelsModule,
    DeviceBrandsModule,
    ContactsModule,
    ContactTypesModule,
    ClientsModule,
    CitiesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
