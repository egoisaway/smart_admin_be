import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformsAccessController } from './platforms_access.controller';
import { PlatformsAccess } from './platforms_access.entity/platforms_access.entity';
import { PlatformsAccessService } from './platforms_access.service';

@Module({
  imports:[TypeOrmModule.forFeature([PlatformsAccess])],
  controllers: [PlatformsAccessController],
  providers: [PlatformsAccessService]
})
export class PlatformsAccessModule {}
