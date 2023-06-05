import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Importante habilitarlo para poder recibir peticiones de otros dominios,
  // por defecto solo deja pasar peticiones del propio backend
  app.enableCors()

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    })),


    await app.listen( process.env.PORT ?? 3000);
}
bootstrap();
