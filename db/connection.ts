import { Sequelize } from 'sequelize';

const db = new Sequelize('NodeTest', 'root', 'adminOficina', {
    host: 'localhost',
    dialect: 'mariadb',
    //logging: false,
})

export default db;