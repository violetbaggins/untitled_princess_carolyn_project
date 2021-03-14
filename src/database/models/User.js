module.exports = (sequelize, DataTypes) => {
    const alias = 'User'
    const columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        desafio01: {
            type: DataTypes.INTEGER
        },
        desafio02: {
            type: DataTypes.INTEGER
        },
        desafio03: {
            type: DataTypes.INTEGER
        },
        desafio04: {
            type: DataTypes.INTEGER
        },
        desafio05: {
            type: DataTypes.INTEGER
        },
        desafio06: {
            type: DataTypes.INTEGER
        },
        desafio07: {
            type: DataTypes.INTEGER
        }
    }
    const config = {
        tableName: 'users',
        timestamps: false, // buscará los campos createdAt/updatedAt
        
    }
    const Model = sequelize.define(alias, columns, config);
    return Model;
    }