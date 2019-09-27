const appsettings = require('../../src/appsettings.json');
import { assert } from 'chai';

describe('appsettings.json', () => {
  it('should version "1.0.0"', () => {
    assert.equal(appsettings.version, '1.0.0');
  });
  it('should esPort 9200', () => {
    assert.equal(appsettings.esPort, 9200);
  });
});
