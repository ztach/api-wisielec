module.exports = function(sequelize, Sequalize) {
    var TypeCountSchema = sequelize.define("TypeCount", {
        
        id:{ 
            type: Sequalize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        typ: Sequalize.STRING,
        dictcount: Sequalize.INTEGER
    },{
        modelName: 'TypeCount',
        tableName: 'TypeCount',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        version: false,
        sequelize
            });
            
    return TypeCountSchema;
}