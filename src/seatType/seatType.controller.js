const SeatType = require('../models/seat.model')

const seatTypeController = {
  findSeatBySeatTypeId: async (id) => {
    const data = await SeatType.findByPk(id)
    return data
  }
}

module.exports = seatTypeController