const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const BoardingPass = db.define('boarding_pass', {
  boarding_pass_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  purchase_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  passenger_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  seat_type_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  seat_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  flight_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: false
})

module.exports = BoardingPass