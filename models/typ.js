module.exports = function(sequelize, Sequalize) {
    var TypSchema = sequelize.define("Typ", {
        
        id:{ 
            type: Sequalize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        typ: Sequalize.STRING
    },{
        modelName: 'Typ',
        tableName: 'typ',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        version: false,
        sequelize
            });
            
    return TypSchema;
}