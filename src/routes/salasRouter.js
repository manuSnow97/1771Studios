const express = require('express');
const { body } = require('express-validator');

const salasController = require('../controllers/salasController');

const router = express.Router();

const authMiddleware = require('../middleWares/authMiddleware');
const multerSalasMiddleware = require('../middleWares/multerSalasMiddleware');
const salasValidationsMiddleware = require('../middleWares/salasValidationsMiddleware');


router.get('/', salasController.listaSalas);

router.get('/crearSala', authMiddleware, salasController.createSala);

router.post('/crearSala', multerSalasMiddleware.single('images'), salasValidationsMiddleware, salasController.newSala);

router.get('/editarSala/:id', authMiddleware, salasController.editSala);

router.post('/editarSala/:id', multerSalasMiddleware.single('images'), salasValidationsMiddleware, salasController.updatedSala);

router.delete('/deleteSala/:id', salasController.deleteSala);

router.get('/:id', salasController.detalleSalas);

module.exports = router;