const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');
const cors = require('cors');

const app = express();

const mainRouter = require('./routes/mainRouter');
const salasRouter = require('./routes/salasRouter');
const cursosRouter = require('./routes/cursosRouter');
const usersRouter = require('./routes/usersRouter');
const cursosAPIRouter = require('./routes/api/cursosAPIRouter');
const salasAPIRouter = require('./routes/api/salasAPIRouter');
const usersAPIRouter = require('./routes/api/usersAPIRouter');

// const pathPublic = path.join(__dirname, "../public");
// const logMiddleWare = require('./middleWares/logDBMiddleware');
const userLoggedMiddleware = require('./middleWares/userLoggedMiddleware');

app.use(express.urlencoded({ extended: false }));

// CONFIGURACION DE SESION
app.use(session({
    secret: '1771 Studios',
    resave: false,
    saveUninitialized: false
}))


app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(cookies());
app.use(userLoggedMiddleware);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.use(logMiddleWare);

app.use('/', mainRouter);
app.use('/salas', salasRouter);
app.use('/cursos', cursosRouter);
app.use('/users', usersRouter);
app.use('./api/salas', salasAPIRouter);
app.use('./api/cursos', cursosAPIRouter);
app.use('./api/users', usersAPIRouter);


app.use((req, res, next) => {
    res.status(404).render('products/not-found')
});

app.listen(3030, () => {
    console.log("servidor iniciado en: http://localhost:3030");
});