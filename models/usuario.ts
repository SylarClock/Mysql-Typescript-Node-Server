import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('Usuario', {
        name: {
            type:DataTypes.STRING
        },
        email: {
            type:DataTypes.STRING
        },
        estado: {
            type:DataTypes.BOOLEAN
        }
    },
    {
        freezeTableName: true
    }
)

export default Usuario;