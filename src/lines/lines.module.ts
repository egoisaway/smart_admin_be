import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinesController } from './lines.controller';
import { Lines } from './lines.entity/lines.entity';
import { LinesService } from './lines.service';

@Module({
  imports:[TypeOrmModule.forFeature([Lines])],
  controllers: [LinesController],
  providers: [LinesService]
})
export class LinesModule {}
