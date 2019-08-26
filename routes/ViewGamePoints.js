var express = require('express');
let ViewGamePoints = require('../models').gamePointsVw;
var router = express.Router();
const gamePointerController = require('../controllers/gamePointerController');
const isExistMiddlware = require('../middleware/ifExists');
 

getStatus = (req, res) => {
    ViewGamePoints.findAll().then(item => {
        res.status(200).json(item);
    });
}

router.get('/', gamePointerController.getAllController,
getStatus
);


router.get('/:id', 
                isExistMiddlware.checkIDInput, 
                isExistMiddlware.checkIDExist,
                gamePointerController.getIdController
);


module.exports = router;