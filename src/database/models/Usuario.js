module.exports = (sequelize, dataTypes) => {
    const alias = "Usuario";

    const cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: dataTypes.STRING,
            allowNull: false
        },
        direccion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        ciudad: {
            type: dataTypes.STRING,
            allowNull: false
        },
        estado_provincia: {
            type: dataTypes.STRING,
            allowNull: false
        },
        pais: {
            type: dataTypes.STRING,
            allowNull: false
        },
        codigo_postal: {
            type: dataTypes.STRING,
            allowNull: false
        },
        telefono: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        profile_image: {
            type: dataTypes.TEXT,
            allowNull: true
        },
        categoria_usuario_id: {
            type: dataTypes.INTEGER,
            foreingKey: true
        }
    };

    const config = {
        tableName: 'usuarios',
        timestamps: false
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Categoria, {
            as: 'categoria de usuario',
            foreingKey: 'categoria_usuario_id'
        });
    }

    return Usuario;
}
