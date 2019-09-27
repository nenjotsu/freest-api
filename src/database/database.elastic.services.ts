import * as elasticsearch from 'elasticsearch';
import { getElasticsearchConfig } from '@config/webserver/config.elastic.db';

export const pingConfig = {
  requestTimeout: 3000,
};

export const ElasticsearchService = () => {
  const config = getElasticsearchConfig();

  const esclient = new elasticsearch.Client(config);

  esclient.ping(pingConfig).catch(err => {
    console.trace(err);
  });

  return esclient;
};
