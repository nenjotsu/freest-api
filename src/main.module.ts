import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AuthenticationMiddleware } from '@common/authentication.middleware';
// import { RestModule } from './modules/candidate-fulfillment/candidate.module';
// import { RestController } from './modules/candidate-fulfillment/candidate.controller';
import { RestModule } from './modules/rest/rest.module';
import { RestController } from './modules/rest/rest.controller';

@Module({
  imports: [RestModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes(RestController);
  }
}
