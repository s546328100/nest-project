import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {logger} from './middleware/logger';
import {HttpExceptionFilter} from './common/exceptionFilters/http.filter';
import { ValidationPipe } from '@nestjs/common';
// import {ValidationPipe} from './common/validation/validationPipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  await app.listen(3000);
}
bootstrap();
