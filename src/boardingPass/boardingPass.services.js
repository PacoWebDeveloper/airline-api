const boardingPassController = require('./boardingPass.controller')
const responses = require('../utils/handleResponses')

const boardingPassService = {
  getBoardingPassByFlightId: (req, res) => {
    const { id } = req.params

    boardingPassController.findBoardingPassByFlightId(id)
      .then(data => {
        responses.success({
          res,
          code: 200,
          data
        })
      })
      .catch(err => {
        responses.error({
          res,
          code: 400,
          data: err
        })
      })
  }
}

module.exports = boardingPassService