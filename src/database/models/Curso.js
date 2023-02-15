module.exports = (sequelize, dataTypes) => {
    const alias = 'Curso';

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
        duracion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        precio: {
            type: dataTypes.DECIMAL,
            allowNull: false
        },
        images: {
            type: dataTypes.TEXT,
            allowNull: false
        }
};

    const config = {
        tableName: 'cursos',
        timestamps: false
    };

    const Curso = sequelize.define(alias, cols, config);

    return Curso;
}