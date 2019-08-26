const Typ = require('../models').Typ;
const tools = require('../js/tools');

exports.getAllController = (req, res) => {
    Typ.findAll().then(typ => {
        let data = tools.getTable(typ);
        res.render('type',{dataType: data, isAll:true, isSingle:false});
    });    
} 


exports.postTypeController = (req, res)=>{
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
}

exports.getIdController = (req, res) => {
    Typ.findByPk(req.params.id).then(typ => {
        let data = [];
        data.push(typ.dataValues);
        res.render('type',{dataType: data, isAll:false, isSingle:true});
    }); 
}

exports.putIdController = (req, res) => {
    Typ.update({
        typ: req.body.typ
    },{
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
}


exports.deleteIdController = (req, res) => {
    //console.log('Delete typ by id');
    Typ.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
}
