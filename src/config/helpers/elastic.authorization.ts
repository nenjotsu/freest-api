import getReadFileSync from './read-file';
import { ENV } from '@common/constants';
export const getElasticAuthFile = (
  env: string,
  defaultValue: string,
): string => {
  switch (env) {
    case ENV.production:
      return getReadFileSync(process.env.ELASTICSEARCH_AUTH_FILE || '');
    case ENV.uat:
      return getReadFileSync(process.env.ELASTICSEARCH_AUTH_FILE || '');

    default:
      return defaultValue;
  }
};
