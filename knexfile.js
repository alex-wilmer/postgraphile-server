require('dotenv').config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/migrations',
      tableName: 'knex_migrations',
    },
  },
}