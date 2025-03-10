import 'dotenv/config';
import { Dialect } from 'sequelize';

interface ISequelizeConfig {
  [key: string]: {
    dialect: Dialect;
    url: string;
  };
}

const config: ISequelizeConfig = {
  development: {
    dialect: 'postgres',
    url: process.env.RPRO_BACKEND_POSTGRES_URI,
  },
  test: {
    dialect: 'postgres',
    url: process.env.RPRO_BACKEND_POSTGRES_URI,
  },
  production: {
    dialect: 'postgres',
    url: process.env.RPRO_BACKEND_POSTGRES_URI,
  },
};

export = config;
