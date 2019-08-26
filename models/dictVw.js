module.exports = function(sequelize, Sequalize) {
    var DictVwSchema = sequelize.define("DictVw", {
        
        id:{ 
            type: Sequalize.INTEGER,
            primaryKey: true
        },
        sl: Sequalize.STRING,
        gt: Sequalize.STRING,
        typ: Sequalize.STRING,
        polecenie: Sequalize.STRING 
    },{
        modelName: 'dictVw',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'dictVw',
        version: false,
        sequelize
            });
    return DictVwSchema;
}