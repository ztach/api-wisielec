module.exports = function(sequelize, Sequalize) {
    var gamePointsVwSchema = sequelize.define("gamePointsVw", {
        
        id:{ 
            type: Sequalize.INTEGER,
            primaryKey: true
        },
        begin_game:{
            type: 'TIMESTAMP'
          },    
        play_time:Sequalize.DOUBLE,
        count_click:Sequalize.INTEGER,
        bad_click:Sequalize.INTEGER,
        gracz: Sequalize.STRING,
        rola: Sequalize.STRING,
        haslo: Sequalize.STRING,
        podpowiedz: Sequalize.STRING,
        typ: Sequalize.STRING,
        user_id:Sequalize.INTEGER,
        begin_date:{
            type: 'TIMESTAMP'
          },    
        end_date:{
            type: 'TIMESTAMP'
          },  
    },{
        modelName: 'gamePointsVw',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'gamePointsVw',
        version: false,
        sequelize
            });
    return gamePointsVwSchema;
}