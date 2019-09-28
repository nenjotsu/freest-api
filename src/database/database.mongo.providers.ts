import * as mongoose from 'mongoose';
import { getMongoConfig } from '@config/webserver/config.mongo.db';
import { MONGO } from '@common/constants';

export const MongoDatabaseProviders = [
  {
    provide: MONGO.DATABASE_CONNECTION,
    useFactory: async (): Promise<typeof mongoose> => {
      const URI = getMongoConfig();
      return await mongoose.connect(URI, {
        useNewUrlParser: true,
      });
    },
  },
];
