import { Module } from '@nestjs/common';
import { SuperheroServiceCommands } from '@commands/superhero/superhero.commands';
import { SuperheroServiceQueries } from '@queries/superhero/superhero.queries';
import { MongoDatabaseModule } from '@database/database.mongo.module';
import { SuperheroController } from './superhero.controller';
import { SuperheroProviders } from './superhero.providers';
import { MongoDatabaseProviders } from '@database/database.mongo.providers';

@Module({
  imports: [MongoDatabaseModule],
  controllers: [SuperheroController],
  providers: [
    SuperheroServiceCommands,
    SuperheroServiceQueries,
    ...MongoDatabaseProviders,
    ...SuperheroProviders,
  ],
})
export class SuperheroModule {}
