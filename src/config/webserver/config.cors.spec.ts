import cors from '@config/webserver/config.cors';
import { assert } from 'chai';

describe('cors config', () => {
  it('should origins array', () => {
    assert.isArray(cors.origins);
  });
  it('should valid methods', () => {
    assert.equal(cors.methods, 'GET,HEAD,PUT,PATCH,POST,DELETE');
  });
  it('should valid preflightContinue', () => {
    assert.equal(cors.preflightContinue, false);
  });
  it('should valid optionsSuccessStatus', () => {
    assert.equal(cors.optionsSuccessStatus, 204);
  });
});
