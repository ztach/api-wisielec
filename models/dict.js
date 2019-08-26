module.exports = function(sequelize, Sequalize) {
    var DictSchema = sequelize.define("Dict", {
        
        id:{ 
            type: Sequalize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        sl: Sequalize.STRING,
        gt: Sequalize.STRING,
        typ_id: Sequalize.INTEGER,
        polecenie_id: Sequalize.INTEGER
    },{
        modelName: 'dict',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'dict',
        version: false,
        sequelize
            });
    return DictSchema;
}