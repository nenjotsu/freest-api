import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { getJwksUri } from '../helpers/jwks-uri';
import { getJwksAudience } from '../helpers/jwks-audience';
import { getJwksIssuer } from '../helpers/jwks-issuer';
import { getJwksAlgorithm } from '../helpers/jwks-algorithm';

export const getJwks = () => {
  const ENV = dotenv.parse(fs.readFileSync('.env'));

  const {
    NODE_ENV,
    JWKS_URI,
    JWKS_AUDIENCE,
    JWKS_ISSUER,
    JWKS_ALGORITHM,
  } = ENV;

  const jwksUri = getJwksUri(NODE_ENV, JWKS_URI);
  const audience = getJwksAudience(NODE_ENV, JWKS_AUDIENCE);
  const issuer = getJwksIssuer(NODE_ENV, JWKS_ISSUER);
  const algorithm = getJwksAlgorithm(NODE_ENV, JWKS_ALGORITHM);

  return {
    jwksUri,
    audience,
    issuer,
    algorithm,
  };
};
