import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { getMongodbConnectionString } from '../helpers/mongo.connection-string';
import { getMongodbAuthDb } from '../helpers/mongo.authsource-db';
import { getMongodbPassword } from '../helpers/mongo.password';
import { getMongodbUser } from '../helpers/mongo.user';

export const getMongoConfig = () => {
  const ENV = dotenv.parse(fs.readFileSync('.env'));

  const username = getMongodbUser(
    ENV.NODE_ENV,
    ENV.MONGODB_DEVELOPMENT_USER_FILE,
  );

  const password = getMongodbPassword(
    ENV.NODE_ENV,
    ENV.MONGODB_DEVELOPMENT_PASSWORD_FILE,
  );

  const connectionString = getMongodbConnectionString(
    ENV.NODE_ENV,
    ENV.DOCUMENTS_DEVELOPMENT_MONGODB_CONNECTION_STRING_FILE,
  );

  const dbName = getMongodbAuthDb(
    ENV.NODE_ENV,
    ENV.DOCUMENTS_DEVELOPMENT_MONGODB_AUTH_DB_FILE,
  );

  const URI = `mongodb://${username}:${password}@${connectionString}/marcidbluedb`;

  // mongodb://myDBReader:D1fficultP%40ssw0rd@mongodb0.example.com:27017/admin
  return URI;
};
