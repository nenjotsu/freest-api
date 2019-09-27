import { Module } from '@nestjs/common';
import { RestServiceCommands } from '@commands/rest/rest.commands';
import { RestServiceQueries } from '@queries/rest/rest.queries';
import { MongoDatabaseModule } from '@database/database.mongo.module';
import { RestController } from './rest.controller';
import { RestProviders } from './rest.providers';
import { MongoDatabaseProviders } from '@database/database.mongo.providers';

@Module({
  imports: [MongoDatabaseModule],
  controllers: [RestController],
  providers: [
    RestServiceCommands,
    RestServiceQueries,
    ...MongoDatabaseProviders,
    ...RestProviders,
  ],
})
export class RestModule {}
