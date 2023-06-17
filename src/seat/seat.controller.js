const Seat = require('../models/seat.model')

const seatController = {
  findSeatBySeatTypeId: async (id) => {
    const data = await Seat.findByPk(id)
    return data
  }
}

module.exports = seatController