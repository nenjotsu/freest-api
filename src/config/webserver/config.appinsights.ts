import * as dotenv from 'dotenv';
import * as fs from 'fs';

const insight = (): void => {
  const ENV = dotenv.parse(fs.readFileSync('.env'));
  const appInsights = require('applicationinsights');
  appInsights
    .setup(ENV.APPINSIGHTS_INSTRUMENTATION_KEY)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .start();
};

export default insight;
