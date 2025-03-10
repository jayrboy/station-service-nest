import 'dotenv/config';
import { Dialect } from 'sequelize';

interface ISequelizeConfig {
  [key: string]: {
    dialect: Dialect;
    url?: string;
    username?: string;
    password?: string;
    database?: string;
    host?: string;
    port?: number | string;
  };
}

const config: ISequelizeConfig = {
  development: {
    dialect: 'postgres',
    url: process.env.RPRO_BACKEND_POSTGRES_URI,
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST,
    port: process.env.RPRO_BACKEND_POSTGRES_PORT,
  },
  test: {
    dialect: 'postgres',
    url: process.env.RPRO_BACKEND_POSTGRES_URI,
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST,
    port: process.env.RPRO_BACKEND_POSTGRES_PORT,
  },
  production: {
    dialect: 'postgres',
    url: process.env.RPRO_BACKEND_POSTGRES_URI,
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST,
  },
};

export = config;
