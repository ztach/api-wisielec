const {Typ} = require('../models');


// middleware
exports.checkIDInput = (req, res, next) => {
    if(isNaN(req.params.id)) {
        res.status(400).json('Invalid ID supplied');
    } else {
        next();
    }
};
exports.checkIDExist = (req, res, next) => {
    Typ.count({ where: { id: req.params.id } }).then(count => {
        if (count != 0) {
            next();
        } else {
            res.status(400).json('Typ not found');
        }
    }); 
};

