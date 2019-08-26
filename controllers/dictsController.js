let Dict = require('../models').DictVw;
let Sequelize=require('sequelize');
const Op = Sequelize.Op;
const tools = require('../js/tools');

exports.getAllController = (req, res) => {
    Dict.findAll().then(dict => {
        let data = tools.getTable(dict);
        res.render('dicts',{dataType: data, isAll:true, isSingle:false});
    });    
} 



exports.getIdController = (req, res) => {
    Dict.findByPk(req.params.id).then(dict => {
        let data = [];
        data.push(dict.dataValues);
        res.render('dicts',{dataType: data, isAll:false, isSingle:true});
    }); 
}

exports.getByTypController = (req, res) => {
    const typ = req.query.typ
    let mlike = {typ: {[Op.like]:   '%' + typ + '%' }} ;
    Dict.findAll({where:mlike})
    .then(dict => {
        let data = [];
        data = tools.getTable(dict);
        res.render('dicts',{dataType: data, isAll:true, isSingle:false});
       })
}