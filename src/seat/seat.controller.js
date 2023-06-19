const Seat = require('../models/seat.model')
const { Op } = require('sequelize')

const seatController = {
  findFreeSeatInSpecificClass: async (seatTypeId, occupiedSeatsList) => {
    const freeSeats = await Seat.findAll({
      [Op.and]: {
        seat_type_id: seatTypeId,
        [Op.notIn]: occupiedSeatsList
      }
    })

    return freeSeats
  },
  findSeatByColumnAndRow: async (col, row) => {
    const seat = await Seat.findOne({    
      where: {
        [Op.and]: {
          seat_column: col,
          seat_row: row
        }
      }
    })

    if (seat.length != 0)
      return seat
    else return null
  }
}

module.exports = seatController