var express = require('express');
var User = require('../models').User;
var router = express.Router();
let Sequelize=require('sequelize');
const Op = Sequelize.Op;

// middleware
var checkIDExist = function (req, res, next) {  
    User.count({ where: { password: req.params.password } }).then(count => {
        if (count != 0) {
            next();
        } else {
            res.status(400).json({error:1});
        }
    }); 
};

router.get('/', function(req, res){
    User.findAll().then(user => {
        res.status(200).json(user);
    });
});

router.get('/:password', [checkIDExist], function(req, res){
    User.findAll({
        where: {password: req.params.password},
      }).then(rola => {
        res.status(200).json(rola);
    });
});



module.exports = router;