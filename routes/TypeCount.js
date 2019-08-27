let express = require('express');
let TypeCount = require('../models').TypeCount;
let router = express.Router();
let Sequelize=require('sequelize');
const Op = Sequelize.Op;

// middleware
var checkIDInput = function (req, res, next) {  
    //console.log('Check ID input');
    if(isNaN(req.params.id)) {
        //console.log('Invalid ID supplied');
        res.status(400).json('Invalid ID supplied');
    } else {
        next();
    }
};

var checkIDExist = function (req, res, next) {  
    TypeCount.count({ where: { id: req.params.id } }).then(count => {
        if (count != 0) {
            next();
        } else {
            res.status(400).json('TypeCount not found');
        }
    }); 
};

router.get('/', function(req, res){
    TypeCount.findAll().then(item => {
        res.status(200).json(item);
    });
});

//http://localhost:3100/dicts/typ?typ=osoba
router.get('/typ', function(req, res){
    const x = req.query.typ
    let mlike = {typ: {[Op.like]:   '%' + x + '%' }} ;
    TypeCount.findAll({where:mlike})
    .then(item => res.status(200).json(item))
});

//http://localhost:3100/dicts/typ_id?typ=[1,3]
router.get('/typ_id', function(req, res){
    const arrTab = JSON.parse("["+req.query.typ+"]");
    let mlike = {typ_id: {[Op.in]: arrTab }} ;
    TypeCount.findAll({where:mlike})
    .then(item => res.status(200).json(item))
});


router.get('/:id', [checkIDInput, checkIDExist], function(req, res){
    TypeCount.findByPk(req.params.id).then(item => {
        res.status(200).json(item);
    });
});



module.exports = router;