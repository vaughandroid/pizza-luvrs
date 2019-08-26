const Sequelize = require('sequelize');

const database = 'pizza_luvrs',
  host = 'pizza-db.cxmvgsiqymai.eu-west-1.rds.amazonaws.com',
  username = 'postgres',
  password = '54K!f^u5GoVr';

const pgClient = new Sequelize(database, username, password, {
    host: host,
    dialect: 'postgres'
});

const Pizza = pgClient.define('pizza', {
    id: { type: Sequelize.STRING, primaryKey: true },
    name: { type: Sequelize.STRING },
    toppings: { type: Sequelize.STRING },
    img: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    created: { type: Sequelize.BIGINT }
});

Pizza.sync().then(() => {
    console.log('Postgres connection ready.');
});

module.exports = Pizza;