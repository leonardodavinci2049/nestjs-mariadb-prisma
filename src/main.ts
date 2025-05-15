import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.main/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('WEBSERVICE');
  app.setGlobalPrefix('api');

  await app.listen(3000);
}
bootstrap();
