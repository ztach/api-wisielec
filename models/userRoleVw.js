module.exports = function(sequelize, Sequalize) {
    var userRoleVwSchema = sequelize.define("userRoleVw", {
        id:{ 
            type: Sequalize.INTEGER,
            primaryKey: true
        },
        login: Sequalize.STRING,
        password: Sequalize.STRING,
        rola: Sequalize.STRING,
        rola_id: Sequalize.INTEGER 
    },{
        modelName: 'userRoleVw',
        timestamps: false,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'userRoleVw',
        version: false,
        sequelize
            });
    return userRoleVwSchema;
}