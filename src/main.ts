import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {logger} from './middleware/logger';
import {HttpExceptionFilter} from './common/exceptionFilters/http.filter';
import {ValidationPipe} from '@nestjs/common';
import {LoggingInterceptor} from './common/interceptor/logging.interceptor';
// import {ValidationPipe} from './common/validation/validationPipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({transform: true}));
  app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen(3000);
}
bootstrap();
