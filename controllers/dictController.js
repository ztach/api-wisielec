const Dict = require('../models').Dict;
const tools = require('../js/tools');

exports.getAllController = (req, res) => {
    Dict.findAll().then(dict => {
        let data = tools.getTable(dict);
        res.render('dict',{dataType: data, isAll:true, isSingle:false});
    });    
} 


exports.postDictController = (req, res)=>{
    Dict.create({
        sl: req.body.sl,
        gt: req.body.gt,
        typ: req.body.typ
    }).then(dict => {
        /*console.log(dict.get({
            plain: true
        }));*/
        res.status(200).json(dict);
    }).error(err => {
        res.status(405).json('Error has occured');
    });
}

exports.getIdController = (req, res) => {
    Dict.findByPk(req.params.id).then(dict => {
        let data = [];
        data.push(dict.dataValues);
        res.render('dict',{dataType: data, isAll:false, isSingle:true});
    }); 
}

exports.putIdController = (req, res) => {
    Dict.update({
        sl: req.body.sl,
        gt: req.body.gt,
        typ: req.body.typ
    },{
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
}


exports.deleteIdController = (req, res) => {
    //console.log('Delete typ by id');
    Dict.destroy({
        where: { id: req.params.id }
    }).then(result => {
        res.status(200).json(result);
    });
}
