const express = require('express');
const usersController = require('../controllers/usersController');

//Middlewares
const authMiddleware = require('../middleWares/authMiddleware');
const guestMiddleware = require('../middleWares/guestMiddleware');
const multerUserMiddleware = require('../middleWares/multerUserMiddleware');
const userValidationsMiddleware = require('../middleWares/userValidationsMiddleware');
const userEditValidations = require('../middleWares/userEditValidations')
// const logDBMiddleware = require('../middleWares/logDBMiddleware'); //Ruta de middleWares para DB


const router = express.Router();

//LOGIN
router.get('/login', guestMiddleware, usersController.login);

router.post('/login', usersController.processLogin);

//REGISTER
router.get('/register', guestMiddleware, usersController.registro);

router.post('/register', multerUserMiddleware.single('profile_image'), userValidationsMiddleware, usersController.processRegister);

//PERFIL
router.get('/perfil', authMiddleware, usersController.profile);

//LISTA USERS
router.get('/userList', usersController.listaUsers);

//DELETE USER
router.delete('/deleteUser/:id', usersController.deleteUser);

//EDIT
router.get('/userEdit/:id', usersController.edit);
router.post('/userEdit/:id', multerUserMiddleware.single('profile_image'), userEditValidations, usersController.update);

//LOGOUT
router.get('/logout/', usersController.logout);


module.exports = router;

