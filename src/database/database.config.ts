import * as dotenv from 'dotenv';
dotenv.config();

export const databaseConfig = {
  development: {
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST || 'localhost',
    port: process.env.RPRO_BACKEND_POSTGRES_PORT || 5432,
    dialect: process.env.RPRO_BACKEND_POSTGRES_DIALECT || 'postgres',
  },
  test: {
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST,
    port: process.env.RPRO_BACKEND_POSTGRES_PORT,
    dialect: process.env.RPRO_BACKEND_POSTGRES_DIALECT,
  },
  production: {
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST,
    dialect: process.env.RPRO_BACKEND_POSTGRES_DIALECT,
  },
};
