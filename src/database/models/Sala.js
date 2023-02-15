module.exports = (sequelize, dataTypes) => {
    const alias = 'Sala';

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: {
            type: dataTypes.STRING,
            allowNull: false
        },
        metros_cuadrados: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        turno_sala: {
            type: dataTypes.STRING,
            allowNull: false
        },
        precio: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        images: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false
        }
    };

    const config = {
        tableName: 'salas',
        timestamps: false
    };

    const Sala = sequelize.define(alias, cols, config);

    return Sala;
}