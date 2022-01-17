require('dotenv').config();

module.exports = {
  development: {
    username: 'root',
    password: null,
    database: 'database_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    // use_env_variable: 'DEV_DATABASE_URL',
  }
}