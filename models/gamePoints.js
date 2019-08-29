module.exports = function(sequelize, Sequalize) {
    var gamePointsSchema = sequelize.define("gamePoints", {
        
        id:{ 
            type: Sequalize.INTEGER,
            primaryKey: true
        },
        play_time:Sequalize.DOUBLE,
        count_click:Sequalize.INTEGER,
        bad_click:Sequalize.INTEGER,
        user_id:Sequalize.INTEGER,
        dict_id:Sequalize.INTEGER
    },{
        modelName: 'gamePoints',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'points_game',
        version: false,
        sequelize
            });
    return gamePointsSchema;
}