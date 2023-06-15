const boardingPassController = require('./boardingPass.controller')
const responses = require('../utils/handleResponses')

const boardingPassService = {
  getBoardingPassByFlightId: (req, res) => {
    const { id } = req.params

    boardingPassController.findBoardingPassByFlightId(id)
      .then(data => {
        responses.success({
          res,
          status: 200,
          message: `Boarding pass with id: ${id} was retrieved successfully`,
          data
        })
      })
      .catch(err => {
        responses.error({
          res,
          status: 400,
          message: 'Boarding pass not found',
          data: err
        })
      })
  }
}

module.exports = boardingPassService