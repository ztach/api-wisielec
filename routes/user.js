var express = require('express');
var User = require('../models').User;
var router = express.Router();
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
    //console.log('Check ID exist');
    User.count({ where: { id: req.params.id } }).then(count => {
        if (count != 0) {
            next();
        } else {
            //console.log('User not found');
            res.status(400).json('User not found');
        }
    }); 
};

router.get('/', function(req, res){
    //console.log('Getting all user',user);    
    User.findAll().then(user => {
        res.status(200).json(user);
    });
});

// /user/logon?login=...password= ...
//http://localhost:3001/user/logon?login=basia&password=basia

router.get('/logon', function(req, res){
    const logs = req.query.login;
    const pass = req.query.password;
    let mlike = {
        [Op.and]:[{login: {[Op.like]: logs }},{password: {[Op.like]: pass }}]
        
    } ;
    User.findAll({where:mlike})
    .then(user => res.status(200).json(user))
});

router.get('/login/:rola', function(req, res){
    User.findAll({
        where: {rola: req.params.rola},
      }).then(rola => {
        res.status(200).json(rola);
    });
});


router.get('/rola/:rola', function(req, res){
    //console.log('Getting all user',req.params);
    User.findAll({
        where: {rola: req.params.rola},
      }).then(rola => {
        res.status(200).json(rola);
    });
});


router.post('/', function(req, res){
    User.create({
        login: req.body.login,
        password: req.body.password,
        rola: req.body.rola,
    }).then(user => {
        /*console.log(user.get({
            plain: true
        }));*/
        console.log('zrobiono',user);
        res.status(200).json(user);
    }).error(err => {
        res.status(405).json('Error has occured');
    });
});

router.get('/:id', [checkIDInput, checkIDExist], function(req, res){
    console.log('Get dict by id',req.params);
    User.findByPk(req.params.id).then(user => {
        //console.log(user);
        res.status(200).json(user);
    });
});

router.put('/:id', [checkIDInput, checkIDExist], function(req, res){
    //console.log('Update dict by id');
    User.update({
        login: req.body.login,
        password: req.body.password,
        rola: req.body.rola,
    },{
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});

router.delete('/:id', [checkIDInput, checkIDExist], function(req, res){
    //console.log('Delete dict by id');
    User.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
});

module.exports = router;