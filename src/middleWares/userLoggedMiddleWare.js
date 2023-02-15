const db = require('../database/models');
const Users = db.Usuario;

const userLogged = async (req, res, next) => {

    try {
        
        res.locals.isLogged = false;
        
        let emailInCookie = req.cookies.userEmail;
        // console.log('hola')

        let userInCookie = await Users.findOne({
            where:{
                email: emailInCookie ? emailInCookie:''
            }
        });
        

        if (userInCookie) {
            req.session.userLogged = userInCookie;
        };

        if (req.session && req.session.userLogged) {
            res.locals.isLogged = true;
            res.locals.userLogged = req.session.userLogged;
        };
        return next();

    } catch (error) {
         
        console.log('Fallo en userLoggedMiddleware'+ error);
        return res.send(error)
    }
}

module.exports = userLogged;

