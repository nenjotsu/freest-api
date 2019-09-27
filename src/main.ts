import * as dotenv from 'dotenv';
import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { defaultRateLimit } from '@common/constants';
import { ValidationPipe } from '@common/validation.pipe';
import swaggerConfig, { version } from '@config/webserver/config.swagger';
import corsConfig from '@config/webserver/config.cors';
import * as RateLimit from 'express-rate-limit';
import * as helmet from 'helmet';
import { AppModule } from './main.module';

async function bootstrap() {
  const ENV = dotenv.parse(fs.readFileSync('.env'));
  const PORT = ENV.PORT || 5012;
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(`/api/${version}`);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors(corsConfig);
  app.use(helmet());
  app.use(new RateLimit(defaultRateLimit));

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('swagger', app, document);
  if (ENV.NODE_ENV !== 'production') {
    console.log('listening in port: ', PORT);
  }
  await app.listen(PORT);
}

bootstrap();
