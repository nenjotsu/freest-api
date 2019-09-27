import getReadFileSync from './read-file';
import { ENV } from '@common/constants';

export const getJwksAlgorithm = (env: string, defaultValue: string): string => {
  switch (env) {
    case ENV.production:
      return getReadFileSync(process.env.JWKS_ALGORITHM || '');
    case ENV.uat:
      return getReadFileSync(process.env.JWKS_ALGORITHM || '');

    default:
      return defaultValue;
  }
};
