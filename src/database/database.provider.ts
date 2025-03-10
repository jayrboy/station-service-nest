import { Sequelize } from 'sequelize-typescript';
import config from '../../config/config';

import { Station } from 'src/station/entities/station.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: config.development.host,
        port: Number(config.development.port),
        username: config.development.username,
        password: config.development.password,
        database: config.development.database,
        logging: false,
      });
      sequelize.addModels([Station]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
