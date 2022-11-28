import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformsController } from './platforms.controller';
import { Platforms } from './platforms.entity/platforms.entity';
import { PlatformsService } from './platforms.service';

@Module({
  imports:[TypeOrmModule.forFeature([Platforms])],
  controllers: [PlatformsController],
  providers: [PlatformsService]
})
export class PlatformsModule {}
