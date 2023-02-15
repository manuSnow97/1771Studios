const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('nombre').notEmpty().withMessage('Tienes que escribir un nombre'),

    body('apellido').notEmpty().withMessage('Tienes que escribir un apellido'),

    body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail().isEmail().withMessage('Debes escribir un formato de correo válido'),

    body('direccion').notEmpty().withMessage('Completar'),

    body('ciudad').notEmpty().withMessage('Completar'),

    body('estado_provincia').notEmpty().withMessage('Completar'),

    body('pais').notEmpty().withMessage('Completar'),

    body('codigo_postal').notEmpty().withMessage('Completar'),

    body('telefono').notEmpty().withMessage('Completar').bail()
        .isLength({ max: 12 }).withMessage('Superaste el límite de caracteres'),

    body('profile_image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif','.JPG','.JPEG'];

        if (file && !acceptedExtensions.includes(path.extname(file.originalname))) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}.`);
        }

        return true;
    })
]