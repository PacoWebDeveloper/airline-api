const Flight = require('../models/flight.model')

const flightController = {
  findFlightById: async (id) => {
    const data = await Flight.findByPk(id)
    return data
  } 
}

module.exports = flightController