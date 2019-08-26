module.exports = function(sequelize, Sequalize) {
    var sessionVwSchema = sequelize.define("sessionVw", {
        id:{ 
            type: Sequalize.INTEGER,
            primaryKey: true
        },
        begin_date:{
            type: 'TIMESTAMP'
          },    
          end_date:{
            type: 'TIMESTAMP'
          },        
        login: Sequalize.STRING,
        rola: Sequalize.STRING
    },{
        modelName: 'sessionVw',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'sessionVw',
        version: false,
        sequelize
            });
    return sessionVwSchema;
}