import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS
  app.enableCors();
  
  // Porta do Railway
  const port = process.env.PORT || 3000;
  
  // Escutar em 0.0.0.0 (importante pro Railway)
  await app.listen(port, '0.0.0.0');
  
  console.log(`🚀 API rodando em: http://0.0.0.0:${port}` );
}
bootstrap();
