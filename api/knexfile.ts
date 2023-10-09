require('dotenv').config();
import { Knex } from 'knex';

export const development: Knex.Config = {
  client: 'pg',
  connection: process.env.DB_URL,
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
};


