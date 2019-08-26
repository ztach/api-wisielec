let ViewGamePoints = require('../models').gamePointsVw;
const tools = require('../js/tools');

exports.getAllController = (req, res) => {
    ViewGamePoints.findAll().then(item => {
        let data = tools.getTable(item);
        res.render('gamePoints',{dataType: data, isAll:true, isSingle:false});
    });    
} 


exports.getIdController = (req, res) => {
    ViewGamePoints.findByPk(req.params.id).then(item => {
        let data = [];
        data.push(item.dataValues);
        res.render('gamePoints',{dataType: data, isAll:false, isSingle:true});
    }); 
}

