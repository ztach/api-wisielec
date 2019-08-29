let express = require('express');
let gamePoints = require('../models').gamePoints;
let router = express.Router();
let Sequelize=require('sequelize');
const Op = Sequelize.Op;

// middleware
var checkIDInput = function (req, res, next) {  
    if(isNaN(req.params.id)) {
        res.status(400).json('Invalid ID supplied');
    } else {
        next();
    }
};

var checkIDExist = function (req, res, next) {  
   gamePoints.count({ where: { id: req.params.id } }).then(count => {
        if (count != 0) {
            next();
        } else {
            res.status(400).json('gamePoints not found');
        }
    }); 
};

router.get('/', function(req, res){
    gamePoints.findAll().then(ur => {
        res.status(200).json(ur);
    });
});


router.get('/:id', [checkIDInput, checkIDExist], function(req, res){
    gamePoints.findByPk(req.params.id).then(item => {
        res.status(200).json(item);
    });
});

router.post('/', function(req, res){
    gamePoints.create({
        play_time:req.body.play_time,
        count_click:req.body.count_click,
        bad_click:req.body.bad_click,
        user_id:req.body.user_id,
        dict_id:req.body.dict_id
    }).then(item => {
        res.status(200).json(item);
    }).error(err => {
        res.status(405).json('Error has occured');
    });
});

module.exports = router;