import { Connection } from 'mongoose';
import { MONGO } from '@common/constants';
import { SuperheroDocumentSchema } from './superhero.schema';

export const SuperheroProviders = [
  {
    provide: MONGO.MODEL_SUPERHERO,
    useFactory: (connection: Connection) =>
      connection.model(MONGO.COLLECTION_SUPPERHERO, SuperheroDocumentSchema),
    inject: [MONGO.DATABASE_CONNECTION],
  },
];
