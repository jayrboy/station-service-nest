import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      uri: process.env.RPRO_BACKEND_POSTGRES_URI,
      models: [],
    }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   playground: true,
    //   autoSchemaFile: join(process.cwd(), 'src/schema.graphql'), // code first
    //   // typePaths: ['./**/*.graphql'], // schema first
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
