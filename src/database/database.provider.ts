import { Sequelize } from 'sequelize-typescript';
import databaseConfig from './database.config';

import { Station } from 'src/station/entities/station.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: databaseConfig.development.host,
        port: Number(databaseConfig.development.port),
        username: databaseConfig.development.username,
        password: databaseConfig.development.password,
        database: databaseConfig.development.database,
        logging: false,
      });
      sequelize.addModels([Station]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
