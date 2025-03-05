import * as dotenv from 'dotenv';
dotenv.config();

export const DatabaseConfig = {
  development: {
    dialect: process.env.RPRO_BACKEND_POSTGRES_DIALECT || 'postgres',
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST || 'localhost',
    port: process.env.RPRO_BACKEND_POSTGRES_PORT || 5432,
  },
  test: {
    dialect: process.env.RPRO_BACKEND_POSTGRES_DIALECT,
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST,
    port: process.env.RPRO_BACKEND_POSTGRES_PORT,
  },
  production: {
    dialect: process.env.RPRO_BACKEND_POSTGRES_DIALECT,
    username: process.env.RPRO_BACKEND_POSTGRES_USERNAME,
    password: process.env.RPRO_BACKEND_POSTGRES_PASSWORD,
    database: process.env.RPRO_BACKEND_POSTGRES_DATABASE,
    host: process.env.RPRO_BACKEND_POSTGRES_HOST,
  },
};
