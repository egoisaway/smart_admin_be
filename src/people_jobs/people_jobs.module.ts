import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleJobsController } from './people_jobs.controller';
import { PeopleJobs } from './people_jobs.entity/people_jobs.entity';
import { PeopleJobsService } from './people_jobs.service';

@Module({
  imports:[TypeOrmModule.forFeature([PeopleJobs])],
  controllers: [PeopleJobsController],
  providers: [PeopleJobsService]
})
export class PeopleJobsModule {}
