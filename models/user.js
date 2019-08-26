module.exports = function(sequelize, Sequalize) {
    var TypSchema = sequelize.define("User", {
        
        id:{ 
            type: Sequalize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        login: Sequalize.STRING,
        password:Sequalize.STRING,
        rola:Sequalize.INTEGER
    },{
        modelName: 'User',
        tableName: 'user',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        version: false,
        sequelize
            });
            
    return TypSchema;
}