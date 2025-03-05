import { Sequelize } from 'sequelize-typescript';
import { Station } from '../station/entities/station.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'kawa_user',
        password: 'postgresql-database-password',
        database: 'water',
      });
      sequelize.addModels([Station]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
