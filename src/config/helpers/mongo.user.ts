import getReadFileSync from './read-file';
import { ENV } from '@common/constants';

export const getMongodbUser = (env: string, defaultValue: any) => {
  switch (env) {
    case ENV.production:
      return getReadFileSync(process.env.MONGODB_USER_FILE);
    case ENV.uat:
      return getReadFileSync(process.env.MONGODB_UAT_USER_FILE);

    default:
      return defaultValue;
  }
};
