import { NestFactory } from '@nestjs/core';
import {Logger as NestLogger, ValidationPipe} from '@nestjs/common';
import { AppModule } from './app.module';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

async function bootstrap() {
  const isProduction = (process.env.NODE_ENV !== 'production');
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  if (isProduction) {
    app.enable('trust proxy');
  }

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT || 3000);
  return app.getUrl();
}

(async (): Promise<void> => {
  try {
    const url = await bootstrap();
    NestLogger.log(url, 'Bootstrap');
  } catch (error) {
    NestLogger.error(error, 'Bootstrap');
  }
})();
