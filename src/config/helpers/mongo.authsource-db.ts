import getReadFileSync from './read-file';
import { ENV } from '@common/constants';

export const getMongodbAuthDb = (env: string, defaultValue: any) => {
  switch (env) {
    case ENV.production:
      return getReadFileSync(process.env.DOCUMENTS_MONGODB_AUTH_DB_FILE);
    case ENV.uat:
      return getReadFileSync(process.env.DOCUMENTS_UAT_MONGODB_AUTH_DB_FILE);

    default:
      return defaultValue;
  }
};
