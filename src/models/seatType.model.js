const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const SeatType = db.define('seat_type', {
  seat_type_id: {
    type: DataTypes.INTEGER
  }
}) 