const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const SeatType = db.define('seat', {
  seat_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  seat_column: {
    type: DataTypes.STRING,
    allowNull: false
  },
  seat_row: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  seat_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  airplane_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
}) 

module.exports = SeatType;