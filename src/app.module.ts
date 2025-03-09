import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StationModule } from './station/station.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path';
import { Station } from './station/entities/station.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      uri: process.env.RPRO_BACKEND_POSTGRES_URI,
      models: [Station],
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class',
      },
    }),
    StationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
