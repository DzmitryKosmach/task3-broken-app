const Sequelize = require('sequelize');
const { USER, PASSWORD } = require('./common/config');
                                //database username   password
const sequelize = new Sequelize('gamedb', USER, PASSWORD, {
    host: 'localhost',
    dialect: 'postgres'
})

sequelize.authenticate().then(
    () => {
        console.log("Connected to DB");
    },

    (err) => {
        console.log(`Error: ${err}`);
    }
)

module.exports = sequelize;