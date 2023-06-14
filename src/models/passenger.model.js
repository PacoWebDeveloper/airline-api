const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Passenger = db.define('passenger', {
  passenger_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  dni: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
})

module.exports = Passenger