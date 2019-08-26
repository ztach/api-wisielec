let express = require('express');
let sessionVw = require('../models').sessionVw;
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
    sessionVw.count({ where: { id: req.params.id } }).then(count => {
        if (count != 0) {
            next();
        } else {
            res.status(400).json('sessionVw not found');
        }
    }); 
};

router.get('/', function(req, res){
    sessionVw.findAll().then(ur => {
        res.status(200).json(ur);
    });
});

//http://localhost:3100/sessionVw/login?login=osoba

router.get('/login', function(req, res){
    const x = req.query.login
    let mlike = {login: {[Op.like]:   '%' + x + '%' }} ;
    sessionVw.findAll({where:mlike})
    .then(item => res.status(200).json(item))
});


//http://localhost:3100/sessionVw/rola?rola=rola

router.get('/rola', function(req, res){
    const x = req.query.rola
    let mlike = {rola: {[Op.like]:   '%' + x + '%' }} ;
    sessionVw.findAll({where:mlike})
    .then(item => res.status(200).json(item))
});


//http://localhost:3100/sessionVw/rola/:rola_id

router.get('/rola/:rola_id', function(req, res){
    const x = req.params.rola_id;
    let mlike = {rola_id: {[Op.eq]: x }} ;
    sessionVw.findAll({where:mlike})
    .then(item => res.status(200).json(item))
});


router.get('/:id', [checkIDInput, checkIDExist], function(req, res){
    sessionVw.findByPk(req.params.id).then(item => {
        res.status(200).json(item);
    });
});


module.exports = router;