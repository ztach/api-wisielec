let express = require('express');
let userRole = require('../models').userRoleVw;
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
    userRole.count({ where: { id: req.params.id } }).then(count => {
        if (count != 0) {
            next();
        } else {
            res.status(400).json('userRole not found');
        }
    }); 
};

router.get('/', function(req, res){
    userRole.findAll().then(ur => {
        res.status(200).json(ur);
    });
});

//http://localhost:3100/userRole/login?login=osoba

router.get('/login', function(req, res){
    const x = req.query.login
    let mlike = {login: {[Op.like]:   '%' + x + '%' }} ;
    userRole.findAll({where:mlike})
    .then(item => res.status(200).json(item))
});


//http://localhost:3100/userRole/rola?rola=rola

router.get('/rola', function(req, res){
    const x = req.query.rola
    let mlike = {rola: {[Op.like]:   '%' + x + '%' }} ;
    userRole.findAll({where:mlike})
    .then(item => res.status(200).json(item))
});


//http://localhost:3100/userRole/rola/:rola_id

router.get('/rola/:rola_id', function(req, res){
    const x = req.params.rola_id;
    let mlike = {rola_id: {[Op.eq]: x }} ;
    userRole.findAll({where:mlike})
    .then(item => res.status(200).json(item))
});


router.get('/:id', [checkIDInput, checkIDExist], function(req, res){
    userRole.findByPk(req.params.id).then(item => {
        res.status(200).json(item);
    });
});


module.exports = router;