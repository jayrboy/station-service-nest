import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3032;

  await app.listen(port, () => {
    console.log('🚀 GraphQL running at http://localhost:%s/graphql', port);
  });
}
bootstrap();
