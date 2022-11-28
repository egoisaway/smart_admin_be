import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatesController } from './states.controller';
import { States } from './states.entity/states.entity';
import { StatesService } from './states.service';

@Module({
  imports:[TypeOrmModule.forFeature([States])],
  controllers: [StatesController],
  providers: [StatesService]
})
export class StatesModule {}
