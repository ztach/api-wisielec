var express = require('express');
var Typ = require('../models').Typ;
var router = express.Router();

// middleware
var checkIDInput = function (req, res, next) {  
    if(isNaN(req.params.id)) {
        res.status(400).json('Invalid ID supplied');
    } else {
        next();
    }
};
var checkIDExist = function (req, res, next) {  
    Typ.count({ where: { id: req.params.id } }).then(count => {
        if (count != 0) {
            next();
        } else {
            res.status(400).json('Typ not found');
        }
    }); 
};

router.get('/', function(req, res){
    Typ.findAll().then(typ => {
        res.status(200).json(typ);
    });
});


router.post('/', function(req, res){
    Typ.create({
        typ: req.body.typ
    }).then(typ => {
        /*console.log(typ.get({
            plain: true
        }));*/
        res.status(200).json(typ);
    }).error(err => {
        res.status(405).json('Error has occured');
    });
});

router.get('/:id', [checkIDInput, checkIDExist], function(req, res){
    Typ.findByPk(req.params.id).then(typ => {
        res.status(200).json(typ);
    });
});

router.put('/:id', [checkIDInput, checkIDExist], function(req, res){
    Typ.update({
        typ: req.body.typ
    },{
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});

router.delete('/:id', [checkIDInput, checkIDExist], function(req, res){
    Typ.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});

module.exports = router;