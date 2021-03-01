module.exports = (sequelize, DataTypes) => {
    const alias = 'Comment'
    const columns = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
        },
        comment: {
            type: DataTypes.STRING,
        }
    }
    const config = {
        tableName: 'comments',
        timestamps: false, // buscará los campos createdAt/updatedAt
        
    }
    const Model = sequelize.define(alias, columns, config);
    return Model;
    }