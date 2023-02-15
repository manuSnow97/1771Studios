const express = require('express');

const router = express.Router();

const app = express();

const cursoAPIController = require('../../controllers/api/cursoAPIController');

///api/product/....

router.get('/',cursoAPIController.list);

router.get('/:id',cursoAPIController.detail)

//TODO: 


module.exports = router;