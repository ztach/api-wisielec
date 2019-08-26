let express = require('express');
let Dict = require('../models').DictVw;
let router = express.Router();
const dictsController = require('../controllers/dictsController');
const isExistMiddlware = require('../middleware/ifExists');


router.get('/', dictsController.getAllController);

//http://localhost:3001/dicts/typ?typ=osoba

router.get('/typ',dictsController.getByTypController );



router.get('/:id', 
                isExistMiddlware.checkIDInput, 
                isExistMiddlware.checkIDExist,
                dictsController.getIdController
);



module.exports = router;