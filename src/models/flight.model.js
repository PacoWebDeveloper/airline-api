const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Flight = db.define('flight', {
  flight_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  takeoff_date_time: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  takeoff_airport: {
    type: DataTypes.STRING,
    allowNull: false
  },
  landing_date_time: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  landing_airport: {
    type: DataTypes.STRING,
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

module.exports = Flight