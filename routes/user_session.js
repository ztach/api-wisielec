var express = require('express');
var Session = require('../models').user_session;
var router = express.Router();
let Sequelize=require('sequelize');
const Op = Sequelize.Op;


var checkIDInput = function (req, res, next) {  
    if(isNaN(req.params.id)) {
        res.status(400).json('Invalid ID supplied');
    } else {
        next();
    }
};
var checkIDExist = function (req, res, next) {  
    Session.count({ where: { id: req.params.id } }).then(count => {
        if (count != 0) {
            next();
        } else {
            res.status(400).json('User not found');
        }
    }); 
};

router.get('/', function(req, res){
    Session.findAll().then(item => {
        res.status(200).json(item);
    });
});

router.post('/', function(req, res){
    Session.create({
        user_id: req.body.user_id,
        begin_date: req.body.begin_date,
    }).then(item => {
        res.status(200).json(item);
    }).error(err => {
        res.status(405).json('Error has occured');
    });
});

router.get('/:id', [checkIDInput, checkIDExist], function(req, res){
    Session.findByPk(req.params.id).then(item => {
        res.status(200).json(item);
    });
});

router.put('/:id', [checkIDInput, checkIDExist], function(req, res){
    Session.update({
        end_date: req.body.end_date,
    },{
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});

router.delete('/:id', [checkIDInput, checkIDExist], function(req, res){
    Session.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});

module.exports = router;