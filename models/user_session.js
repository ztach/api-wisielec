let Sequelize=require('sequelize');

module.exports = function(sequelize, Sequalize) {
    var user_sessionSchema = sequelize.define("user_session", {
        id:{ 
            type: Sequalize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: Sequalize.INTEGER,
        begin_date:{
            type: 'TIMESTAMP',
            allowNull: false
          },

        end_date:{
            type: 'TIMESTAMP',
            allowNull: true
          }
    },{
        modelName: 'user_session',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'user_session',
        version: false,
        sequelize
            });
    return user_sessionSchema;
}