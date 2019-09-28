import { Connection } from 'mongoose';
import { MONGO } from '@common/constants';
import { RestDocumentSchema } from './rest.schema';

export const RestProviders = [
  {
    provide: MONGO.MODEL_REST,
    useFactory: (connection: Connection) =>
      connection.model(MONGO.COLLECTION_REST, RestDocumentSchema),
    inject: [MONGO.DATABASE_CONNECTION],
  },
];
