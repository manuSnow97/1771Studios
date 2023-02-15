const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('titulo').notEmpty().withMessage('Campo Incompleto'),

    body('metros_cuadrados').notEmpty().withMessage('Campo Incompleto'),

    body('turno_sala').notEmpty().withMessage('Campo Incompleto'),

    body('precio').notEmpty().withMessage('Campo Incompleto'),

    body('images')
        .custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.JPG', '.JPEG'];

        if (file && !acceptedExtensions.includes(path.extname(file.originalname))) {
            throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}.`);
        }

        return true;
        }),

    body('descripcion').notEmpty().withMessage('Campo Incompleto'),
]