import { Knex } from 'knex';

export const development: Knex.Config = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'docker',
    password: 'docker',
    database: 'app',
  },
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
};