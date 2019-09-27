import getReadFileSync from './read-file';
import { ENV } from '@common/constants';

export const getMongodbConnectionString = (env: string, defaultValue: any) => {
  switch (env) {
    case ENV.production:
      return getReadFileSync(
        process.env.DOCUMENTS_MONGODB_CONNECTION_STRING_FILE,
      );
    case ENV.uat:
      return getReadFileSync(
        process.env.DOCUMENTS_UAT_MONGODB_CONNECTION_STRING_FILE,
      );

    default:
      return defaultValue;
  }
};
