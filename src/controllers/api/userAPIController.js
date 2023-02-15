const db = require("../../database/models")
let Users = db.Usuario;

const userApiController = {
    all: (req, res) => {
        Users.findAll()
            .then(users => {
                res.json({
                    meta: {
                        status: 200,
                        total: users.length,
                        url: 'api/users'
                    },
                    data: users
                });
            })
    },
    detail: (req, res) => {
        Users.findByPk(req.params.id)
            .then(user => {
                res.json({
                    meta: {
                        status: 200,
                        url: req.url
                    },
                    data: user
                });
            });
    },
}

module.exports = userApiController;