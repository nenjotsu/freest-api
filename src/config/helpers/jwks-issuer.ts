import getReadFileSync from './read-file';
import { ENV } from '@common/constants';

export const getJwksIssuer = (env: string, defaultValue: string): string => {
  switch (env) {
    case ENV.production:
      return getReadFileSync(process.env.JWKS_ISSUER || '');
    case ENV.uat:
      return getReadFileSync(process.env.JWKS_ISSUER || '');

    default:
      return defaultValue;
  }
};
