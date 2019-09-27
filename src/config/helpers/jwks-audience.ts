import getReadFileSync from './read-file';
import { ENV } from '@common/constants';

export const getJwksAudience = (env: string, defaultValue: string): string => {
  switch (env) {
    case ENV.production:
      return getReadFileSync(process.env.JWKS_AUDIENCE || '');
    case ENV.uat:
      return getReadFileSync(process.env.JWKS_AUDIENCE || '');

    default:
      return defaultValue;
  }
};
