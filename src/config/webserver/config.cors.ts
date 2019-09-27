import * as dotenv from 'dotenv';
import * as fs from 'fs';

const allowedMethods = 'GET,HEAD,PUT,PATCH,POST,DELETE';

const prodAllowedDomains = ['*'];

const devAllowedDomains = [...prodAllowedDomains, '*'];

const ENV = dotenv.parse(fs.readFileSync('.env'));

const allowedDomains =
  ENV.NODE_ENV === 'development' ? devAllowedDomains : prodAllowedDomains;

const corsOptions = {
  origins: allowedDomains,
  methods: allowedMethods,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

export default corsOptions;
