import { Sequelize } from 'sequelize-typescript';
import { Station } from '../station/entities/station.entity';
import { DatabaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case 'DEVELOPMENT':
          config = DatabaseConfig.development;
          break;
        case 'TEST':
          config = DatabaseConfig.test;
          break;
        case 'PRODUCTION':
          config = DatabaseConfig.production;
          break;
        default:
          config = DatabaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Station]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
