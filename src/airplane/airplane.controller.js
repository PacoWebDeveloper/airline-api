const Airplane = require('../models/airplane.model')

const airplaneController = {
  findAllAirplanes: async () => {
    const data = await Airplane.findAll()
    return data
  }
}

module.exports = airplaneController