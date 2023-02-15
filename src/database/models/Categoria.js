module.exports = (sequelize, dataTypes) => {
    const alias = 'Categoria';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categoria: {
            type: dataTypes.STRING,
            allowNull: false
        }
    };

    const config = {
        tableName: 'categoria_usuario',
        timestamps: false
    };

    const Categoria = sequelize.define(alias, cols, config);

    return Categoria;
}