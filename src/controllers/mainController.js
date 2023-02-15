// const fs = require('fs');
// const path = require('path');

// const salasFilePath = path.join(__dirname, '../database/salasData.json');
// const salas = JSON.parse(fs.readFileSync(salasFilePath, 'utf-8'));

// const cursosFilePath = path.join(__dirname, '../database/cursosData.json');
// const cursos = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));

const db = require('../database/models');
const sequelize = db.sequelize;
const Cursos = db.Curso;
const Salas = db.Sala;



const mainController = {
    index: async (req, res) => {
        const cursos = await db.Curso.findAll()
        const salas = await db.Sala.findAll()
        // res.send({salas, cursos});
        res.render('index', { salas, cursos });
 
    },
    register: (req, res) => {
        res.render('register');
    },
    productCart: (req, res) => {
        res.render('products/productCart');
    },
    about: (req, res) => {
        res.render('about')
    }
}

module.exports = mainController;