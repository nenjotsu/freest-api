import { Connection } from 'mongoose';
import { MONGO } from '@common/constants';
import { RestDocumentSchema } from './rest.schema';

export const RestProviders = [
  {
    provide: MONGO.REST_MODEL,
    useFactory: (connection: Connection) =>
      connection.model(MONGO.COLLECTION_NAME, RestDocumentSchema),
    inject: [MONGO.DATABASE_CONNECTION],
  },
];
