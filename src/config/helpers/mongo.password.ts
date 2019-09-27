import getReadFileSync from './read-file';
import { ENV } from '@common/constants';

export const getMongodbPassword = (env: string, defaultValue: any) => {
  switch (env) {
    case ENV.production:
      return getReadFileSync(process.env.MONGODB_PASSWORD_FILE);
    case ENV.uat:
      return getReadFileSync(process.env.MONGODB_UAT_PASSWORD_FILE);

    default:
      return defaultValue;
  }
};
