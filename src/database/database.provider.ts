import { Sequelize } from 'sequelize-typescript';
import databaseConfig from '../../config/config';
import { Station } from 'src/station/entities/station.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case 'DEVELOPMENT':
          config = databaseConfig.development;
          break;
        case 'TEST':
          config = databaseConfig.test;
          break;
        case 'PRODUCTION':
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([Station]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
