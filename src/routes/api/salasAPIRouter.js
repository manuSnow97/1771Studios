const express = require('express');

const router = express.Router();

const app = express();

const salaAPIController = require('../../controllers/api/salaAPIController');

///api/product/....

router.get('/',salaAPIController.list);

router.get('/:id',salaAPIController.detail)

//TODO: 


module.exports = router;