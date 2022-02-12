const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
    process.env.DB_NAME, // DB name
    process.env.DB_USER, // DB user
    process.env.DB_PASSWORD, // user password
    {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        host: process.env.DB_HOST, // DB host
        port: process.env.DB_PORT // DB port
    }
)