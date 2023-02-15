// const { json } = require('express');
const fs = require('fs');
const path = require('path');

// const cursosFilePath = path.join(__dirname, '../database/cursosData.json');
// const cursos = JSON.parse(fs.readFileSync(cursosFilePath, 'utf-8'));
const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult } = require('express-validator');


const Cursos = db.Curso;



const controller = {
    listaCursos: (req, res) => {
        Cursos.findAll()
            .then(function (cursos) {
                res.render('products/listaCursos', { cursos });
            })
    },
    detalleCursos: async (req, res) => {
        let curso = await Cursos.findOne({ where: { id: req.params.id } })
        res.render('products/detalleCursos', { curso });

    },
    createCurso: (req, res) => {
        const cursos = Cursos.findAll();
        res.render('admin/crearCurso', { cursos });
    },
    newCurso: async (req, res) => {
        await Cursos.create({
            titulo: req.body.titulo,
            duracion: req.body.duracion,
            precio: req.body.precio,
            images: req.file.filename
        })

        res.redirect('/');
    },
    editCurso: async (req, res) => {
        let curso = await Cursos.findOne({ where: { id: req.params.id } })
        res.render('admin/editarCurso', { curso });
    },
    updatedCurso: async (req, res) => {
        try {
            await Cursos.findOne({ where: { id: req.params.id } });

            await Cursos.update({
                titulo: req.body.titulo,
                duracion: req.body.duracion,
                precio: req.body.precio,
                images: req.file.filename
            }, {
                where: {
                    id: req.params.id
                }
            });

            return res.redirect('/')

        } catch (error) {
            console.log('falle en curso.update: ' + error);
            return res.json(error);
        }

    },
    deleteCurso: async (req, res) => {

        try {
            const cursoId = req.params.id
            await Cursos.destroy({
                where: {
                    id: cursoId
                }
            });

            res.redirect('/')
        } catch (error) {
            console.log('falle en deleteCurso: ' + error);
            return res.json(error);
        }
    }
}

module.exports = controller;