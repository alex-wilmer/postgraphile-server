require('dotenv').config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    // pool: {
    //   min: process.env.DATABASE_POOL_MIN,
    //   max: process.env.DATABASE_POOL_MAX,
    // },
    migrations: {
      directory: './src/migrations',
      tableName: 'knex_migrations',
    },
    // seeds: {
      // directory: './db/seeds',
    // },
  },
}