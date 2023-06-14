const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Airplane = db.define('airplane', {
  airplane_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  freezeTableName: true,
  timestamps: false
})

module.exports = Airplane