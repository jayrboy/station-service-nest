import { Sequelize } from 'sequelize-typescript';
import { Station } from 'src/station/entities/station.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        username: 'kawa_user',
        password: 'postgresql-database-password',
        database: 'water',
        host: 'localhost',
        port: 5432,
        logging: false,
      });
      sequelize.addModels([Station]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
