import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
// import { AuthenticationMiddleware } from '@common/authentication.middleware';
import { RestModule } from './modules/rest/rest.module';
import { RestController } from './modules/rest/rest.controller';
import { SuperheroModule } from './modules/superhero/superhero.module';
import { SuperheroController } from './modules/superhero/superhero.controller';

@Module({
  imports: [RestModule, SuperheroModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes(RestController, SuperheroController);
  }
}
