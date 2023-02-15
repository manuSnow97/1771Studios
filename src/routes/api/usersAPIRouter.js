const express = require('express');

const router = express.Router();

const app = express();

const userAPIController = require('../../controllers/api/userAPIController');

///api/product/....

router.get('/',userAPIController.all);

router.get('/:id',userAPIController.detail)

//TODO: 


module.exports = router;