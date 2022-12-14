import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleController } from './people.controller';
import { People } from './people.entity/people.entity';
import { PeopleFull } from './people.entity/peoplefull.entity';
import { PeopleService } from './people.service';

@Module({
  imports:[TypeOrmModule.forFeature([People,PeopleFull])],
  controllers: [PeopleController],
  providers: [PeopleService]
})
export class PeopleModule {}
