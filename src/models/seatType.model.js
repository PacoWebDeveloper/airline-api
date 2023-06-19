const DataTypes = require('sequelize')

const db = require('../utils/database')

const SeatType = db.define('seat_type', {
  seat_type_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
})

module.exports = SeatType