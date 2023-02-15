const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('titulo')
        .notEmpty()
        .withMessage('Campo Incompleto'),

    body('duracion')
        .notEmpty()
        .withMessage('Campo Incompleto'),

    body('precio')
        .notEmpty()
        .withMessage('Completar'),

    body('imagenCurso')
        .custom((value, { req }) => {
            let file = req.file;
            let acceptedExtensions = ['.jpg', '.jpge', '.png'];

            if (!file) {
                throw new Error('Debe subir una imagen')
            } else {
                let fileExtension = path.extname(file.originalname);
                if (!acceptedExtensions.includes(fileExtension)) {
                    throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}.`);
                }
            }
            return true;
        }),
]