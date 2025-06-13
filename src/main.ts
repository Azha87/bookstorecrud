import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );
  await app.listen(process.env.PORT || 3005);
}

bootstrap();
