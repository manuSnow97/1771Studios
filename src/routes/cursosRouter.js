const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const cursosController = require('../controllers/cursosController');

const authMiddleware = require('../middleWares/authMiddleware');
const multerCursosMiddleware = require('../middleWares/multerCursosMiddleware');
const cursosValidationsMiddleware = require('../middleWares/cursosValidationsMiddleware');



// Muestra listado de cursos
router.get('/', cursosController.listaCursos);

// Detalle del curso

// Vista del create
router.get('/crearCurso', authMiddleware, cursosController.createCurso);

// Carga los datos del nuevo curso
router.post('/crearCurso', cursosValidationsMiddleware, multerCursosMiddleware.single('images'), cursosController.newCurso);

// Muestra la vista de edición del curso
router.get('/editarCurso/:id', authMiddleware, cursosController.editCurso);

router.put('/editarCurso/:id', cursosValidationsMiddleware, multerCursosMiddleware.single('images'), cursosController.updatedCurso);

router.delete('/deleteCurso/:id', cursosController.deleteCurso);

router.get('/:id', cursosController.detalleCursos);



module.exports = router;