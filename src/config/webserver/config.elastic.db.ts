import * as dotenv from 'dotenv';
import * as fs from 'fs';

export const getElasticsearchConfig = () => {
  const ENV = dotenv.parse(fs.readFileSync('.env'));

  const { ELASTIC_HOST, ELASTIC_PORT, ELASTICSEARCH_AUTH_FILE } = ENV;

  return {
    hosts: [
      {
        headers: {
          Authorization: ELASTICSEARCH_AUTH_FILE,
        },
        host: ELASTIC_HOST,
        port: ELASTIC_PORT,
        protocol: 'http',
      },
    ],
  };
};
