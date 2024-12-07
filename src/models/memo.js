const { DataTypes } = require('sequelize');

module.exports = function(db) {
    return db.define (
        'memo', 
        {
            id: {
                type: DataTypes.INTEGER
            },
            text: {
                type: DataTypes.TEXT
            }, 
            created: {
                type: DataTypes.DATE
            },
            modified: {
                type: DataTypes.DATE
            }
        }
    );
}