const BoardingPass = require('../models/boarding_pass')

const boardingPassController = {
  findBoardingPassByFlightId: async (flighId) => {
    const data = await BoardingPass.findOne({
      where: { flight_id: flighId }
    })

    return data
  }
}

module.exports = boardingPassController