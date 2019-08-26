let express = require('express');
let Dict = require('../models').DictVw;
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
    console.log('Check ID exist');
    Dict.count({ where: { id: req.params.id } }).then(count => {
        if (count != 0) {
            next();
        } else {
            //console.log('Dict not found');
            res.status(400).json('Dict not found');
        }
    }); 
};

router.get('/', function(req, res){
    //console.log('Getting all Dicts');
    Dict.findAll().then(dict => {
        res.status(200).json(dict);
    });
});

//http://localhost:3100/dicts/typ?typ=osoba

router.get('/typ', function(req, res){
    const x = req.query.typ
    console.log('typ ',x)
    let mlike = {typ: {[Op.like]:   '%' + x + '%' }} ;
    Dict.findAll({where:mlike})
    .then(dict => res.status(200).json(dict))
});

//http://localhost:3100/dicts/typ_id?typ=[1,3]
router.get('/typ_id', function(req, res){
    const arrTab = JSON.parse("["+req.query.typ+"]");
    let mlike = {typ_id: {[Op.in]: arrTab }} ;
    Dict.findAll({where:mlike})
    .then(dict => res.status(200).json(dict))
});



router.get('/:id', [checkIDInput, checkIDExist], function(req, res){
    console.log('paramy: ',req.params);
    Dict.findByPk(req.params.id).then(dict => {
        //console.log(dict);
        res.status(200).json(dict);
    });
});



module.exports = router;