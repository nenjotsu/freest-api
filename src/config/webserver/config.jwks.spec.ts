import { getJwks } from '@config/webserver/config.jwks';
import { assert } from 'chai';

describe('getJwks function', () => {
  let jwksData: any;
  beforeEach(() => {
    jwksData = getJwks();
  });
  it('has property jwksUri', () => {
    assert.property(jwksData, 'jwksUri');
  });
  it('has property audience', () => {
    assert.property(jwksData, 'audience');
  });
  it('has property issuer', () => {
    assert.property(jwksData, 'issuer');
  });
  it('has property algorithm', () => {
    assert.property(jwksData, 'algorithm');
  });
});
