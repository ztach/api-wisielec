const express = require('express');
const Typ = require('../models').Typ;
const router = express.Router();
const typeController = require('../controllers/typeController');
const isExistMiddlware = require('../middleware/ifExists');


router.get('/', typeController.getAllController );


router.post('/', typeController.postTypeController);

router.get('/:id', 
                isExistMiddlware.checkIDInput, 
                isExistMiddlware.checkIDExist,
                typeController.getIdController
 );

router.put('/:id', 
                isExistMiddlware.checkIDInput, 
                isExistMiddlware.checkIDExist,
                typeController.putIdController

);

router.delete('/:id', 
                    isExistMiddlware.checkIDInput, 
                    isExistMiddlware.checkIDExist,
                    typeController.deleteIdController
);


module.exports = router;