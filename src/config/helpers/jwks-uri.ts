import getReadFileSync from './read-file';
import { ENV } from '@common/constants';

export const getJwksUri = (
  env: string = 'development',
  defaultValue: string,
): string => {
  switch (env) {
    case ENV.production:
      return getReadFileSync(process.env.JWKS_URI || '');
    case ENV.uat:
      return getReadFileSync(process.env.JWKS_URI || '');

    default:
      return defaultValue;
  }
};
