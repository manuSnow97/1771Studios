const { validationResult } = require('express-validator');
const db = require('../../database/models')
let Curso = db.Curso;

const cursoAPIController = {
    list: (req, res) => {
        Curso.findAll()
            .then(curso => {
                res.json({
                    meta: {
                        status: 200,
                        total: curso.length,
                        url: 'api/cursos'
                    },
                    data: curso
                });
            })
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        Curso.findByPk(req.params.id)
            .then(curso => {
                res.json({
                    meta: {
                        status: 200,
                        url: req.url
                    },
                    data: curso
                });
            });
    },
};


module.exports = cursoAPIController;