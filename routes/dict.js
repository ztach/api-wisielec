var express = require('express');
var Dict = require('../models').Dict;
var router = express.Router();

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
    //console.log('Check ID exist');
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


router.post('/', function(req, res){
    Dict.create({
        sl: req.body.sl,
        gt: req.body.gt,
        typ_id: req.body.typ_id,
        polecenie_id: req.body.polecenie_id,
    }).then(dict => {
        /*console.log(dict.get({
            plain: true
        }));*/
        console.log('zrobiono',dict);
        res.status(200).json(dict);
    }).error(err => {
        res.status(405).json('Error has occured');
    });
});

router.get('/:id', [checkIDInput, checkIDExist], function(req, res){
    console.log('Get dict by id',req.params.id);
    Dict.findByPk(req.params.id).then(dict => {
        //console.log(dict);
        res.status(200).json(dict);
    });
});

router.put('/:id', [checkIDInput, checkIDExist], function(req, res){
    //console.log('Update dict by id');
    Dict.update({
        sl: req.body.sl,
        gt: req.body.gt,
        typ: req.body.typ
    },{
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});

router.delete('/:id', [checkIDInput, checkIDExist], function(req, res){
    //console.log('Delete dict by id');
    Dict.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});

module.exports = router;