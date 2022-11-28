import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlansController } from './plans.controller';
import { Plans } from './plans.entity/plans.entity';
import { PlansService } from './plans.service';

@Module({
  imports:[TypeOrmModule.forFeature([Plans])],
  controllers: [PlansController],
  providers: [PlansService]
})
export class PlansModule {}
