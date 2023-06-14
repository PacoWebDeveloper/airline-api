const BoardingPass = require('../models/boarding_pass')

const boardingPassController = {
  findBoardingPassById: async (id) => {
    const data = await BoardingPass.findByPk(id)

    return data
  }
}

module.exports = boardingPassController