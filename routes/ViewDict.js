var express = require('express');
var Dict = require('../models').Dict;
var router = express.Router();
const dictController = require('../controllers/dictController');
const isExistMiddlware = require('../middleware/ifExists');
 

// router.get('/', function(req, res){
//     //console.log('Getting all Typs');
//     Dict.findAll().then(dict => {
//         res.status(200).json(dict);
//     });
// });

getStatus = (req, res) => {
    //console.log('Getting all Typs');
    Dict.findAll().then(dict => {
        res.status(200).json(dict);
    });
}

router.get('/', dictController.getAllController,
getStatus
);


router.post('/', dictController.postDictController);

router.get('/:id', 
                isExistMiddlware.checkIDInput, 
                isExistMiddlware.checkIDExist,
                dictController.getIdController
);

router.put('/:id', 
                isExistMiddlware.checkIDInput, 
                isExistMiddlware.checkIDExist,
                dictController.putIdController
);

router.delete('/:id',
                isExistMiddlware.checkIDInput, 
                isExistMiddlware.checkIDExist,
                dictController.deleteIdController
);

module.exports = router;