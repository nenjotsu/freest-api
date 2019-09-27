import { Module } from '@nestjs/common';
import { MongoDatabaseProviders } from './database.mongo.providers';

@Module({
  providers: [...MongoDatabaseProviders],
  exports: [...MongoDatabaseProviders],
})
export class MongoDatabaseModule {}
