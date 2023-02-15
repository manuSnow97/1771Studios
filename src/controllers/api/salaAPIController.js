const { validationResult } = require('express-validator');
const db = require('../../database/models')
let Sala = db.Sala;

const salaAPIController = {
    list: (req, res) => {
        Sala.findAll()
            .then(sala => {
                res.json({
                    meta: {
                        status: 200,
                        total: sala.length,
                        url: 'api/salas'
                    },
                    data: sala
                });
            })
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        Sala.findByPk(req.params.id)
            .then(sala => {
                res.json({
                    meta: {
                        status: 200,
                        url: req.url
                    },
                    data: sala
                });
            });
    },
};


module.exports = salaAPIController;