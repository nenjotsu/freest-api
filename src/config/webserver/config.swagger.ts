import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { DocumentBuilder } from '@nestjs/swagger';

const ENV = dotenv.parse(fs.readFileSync('.env'));

const name = 'Agency Candidate Center API';
export const version = 'v1';

const baseUrl = `/api/${version}`;

const swaggerConfig = new DocumentBuilder()
  .setTitle(name)
  .setDescription(
    `The ${name} description for ${version}.

    e.g. http://localhost:${ENV.PORT}${baseUrl}/rest/campaigns
  `,
  )
  .setVersion(version)
  .addBearerAuth()
  .setBasePath(`/api/${version}`)
  .setSchemes('http', 'https')
  .build();

export default swaggerConfig;
