const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

const db = require('../database/models');
const sequelize = db.sequelize;

const Users = db.Usuario;

const controller = {


    registro: (req, res) => {
        res.render('users/register');
    },

    processRegister: async (req, res) => {

        try {
            let resultValidation = validationResult(req);
            if (resultValidation.errors.length < 0) {
                if (req.file) {
                    req.file ? fs.unlinkSync(path.join(__dirname, '../../public/images/user/' + req.file.filename)) : null;
                }
                return res.render('users/register', {
                    oldData: req.body,
                    categoria_usuario_id: 2,
                    errors: resultValidation.mapped()
                }, 'Error en el registro');
            } else {
                let newUser = {
                    nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    direccion: req.body.direccion,
                    ciudad: req.body.ciudad,
                    estado_provincia: req.body.estado_provincia,
                    pais: req.body.pais,
                    codigo_postal: req.body.codigo_postal,
                    telefono: req.body.telefono,
                    email: req.body.email,
                    profile_image: req.file.filename,
                    categoria_usuario_id: 2,
                    password: bcryptjs.hashSync(req.body.password)
                };

                await Users.create(newUser);


                res.redirect('/users/login');
            }

        } catch (error) {

            console.log('falle en usercontroller.upload' + error);
            return res.send(error);

        };
    },

    login: (req, res) => {
        res.render('users/login');
    },

    processLogin: async (req, res) => {
        try {

            let userData = req.body;

            let userToLogin = await Users.findOne({ where: { email: userData.email } });
            if (userToLogin) {
                let passwordOk = bcryptjs.compareSync(req.body.password, userToLogin.password)
                if (passwordOk) {

                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;

                    if (req.body.recordar) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                    }; //Creo cookie 'recordar'

                    return res.redirect('/');
                }
                return res.render("users/login", { errors: { password: { msg: "constraseña incorrecta" } }, oldDataLogin: userToLogin.email });
            }
            return res.render("users/login", { errors: { email: { msg: "Email incorrecto" } } });
        } catch (error) {

            console.log('Falla en el controlador: proccesLogin');
            return res.send(error);
        }

    },

    edit: async (req, res) => {
        try {

            let user = await Users.findOne({ where: { id: req.params.id } })
            res.render('admin/userEdit', { user })
        } catch (error) {
            console.log("Fallo en el edit: " + error);
            return res.json(error);
        }
    },

    update: async function (req, res) {

        try {
            await Users.findOne({ where: { id: req.params.id } });

            await Users.update({
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                direccion: req.body.direccion,
                ciudad: req.body.ciudad,
                estado_provincia: req.body.estado_provincia,
                pais: req.body.pais,
                codigo_postal: req.body.codigo_postal,
                telefono: req.body.telefono,
                email: req.body.email,
                profile_image: req.file.filename,
            }, {
                where: {
                    id: req.params.id
                }
            });
            return res.redirect('/users/perfil');

        } catch (error) {
            console.log('falle en user.update: ' + error);
            return res.json(error);
        }
    },

    profile: async (req, res) => {
        const user = await Users.findOne({
            where: {
                id: req.session.userLogged.id
            }
        })
        req.session.userLogged = user;
        return res.render('users/perfil', { user });
    },

    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },
    listaUsers: (req, res) => {
        Users.findAll()
            .then(function (users) {
                res.render('users/userList', { users });
            })
    },
    deleteUser: async (req, res) => {
        try {
            const userId = req.params.id
            await Users.destroy({
                where: {
                    id: userId
                }
            });

            res.redirect('/')
        } catch (error) {
            console.log('falle en deleteUser: ' + error);
            return res.json(error);
        }
    }

}

module.exports = controller;


