import * as fs from 'fs';
import * as lodash from 'lodash';
import { BadGatewayException } from '@nestjs/common';

const getReadFileSync = (envName: string | undefined): string => {
  if (envName === undefined) {
    return '';
  }
  const envValue = fs.readFileSync(envName, 'utf8');
  if (lodash.isEmpty(envValue)) {
    throw new BadGatewayException(
      `${envName} is missing from Environment Variables`,
    );
  }
  return envValue;
};

export default getReadFileSync;
