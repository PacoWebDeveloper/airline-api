const Passenger = require('../models/passenger.model')

const passengerController = {
  findPassengerById: async (id) => {
    const data = await Passenger.findByPk(id)

    return data
  }
}

module.exports = passengerController