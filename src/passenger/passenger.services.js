const passengerController = require('./passenger.controller')
const responses = require('../utils/handleResponses')

const passengerService = {
  getPassengrById: (req, res) => {
    const { id } = req.params

    passengerController.findPassengerById(id)
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

module.exports = passengerService