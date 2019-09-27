import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { getElasticsearchConfig } from '@config/webserver/config.elastic.db';

export const ElasticDatabaseProviders = ElasticsearchModule.registerAsync({
  useFactory: async () => {
    const config = getElasticsearchConfig();
    return await {
      ...config,
    };
  },
});
