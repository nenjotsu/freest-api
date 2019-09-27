import { getElasticsearchConfig } from '@config/webserver/config.elastic.db';
import { assert } from 'chai';

describe('getElasticsearchConfig function', () => {
  let dataElasticConfig: any;
  beforeEach(() => {
    dataElasticConfig = getElasticsearchConfig();
  });
  it('should be object', () => {
    assert.isObject(dataElasticConfig);
  });
  it('should hosts be array', () => {
    assert.isArray(dataElasticConfig.hosts);
  });
  it('should hosts first array be object', () => {
    assert.isObject(dataElasticConfig.hosts[0]);
  });
  it('should host has headers', () => {
    assert.property(dataElasticConfig.hosts[0], 'headers');
  });
  it('should headers has Authorization', () => {
    assert.property(dataElasticConfig.hosts[0].headers, 'Authorization');
  });
  it('should host has host', () => {
    assert.property(dataElasticConfig.hosts[0], 'host');
  });
  it('should host has port', () => {
    assert.property(dataElasticConfig.hosts[0], 'port');
  });
  it('should host has protocol', () => {
    assert.property(dataElasticConfig.hosts[0], 'protocol');
  });
});
