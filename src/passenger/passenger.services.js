const passengerController = require('./passenger.controller')
const responses = require('../utils/handleResponses')

const passengerService = {
  getPassengrById: (req, res) => {
    const { id } = req.params

    passengerController.findPassengerById(id)
      .then(data => {
        responses.success({
          res,
          status: 200,
          message: `Passenger with id: ${id} was retrieved successfully`,
          data
        })
      })
      .catch(err => {
        responses.error({
          res,
          status: 400,
          message: 'Passenger not found',
          data: err
        })
      })
  }
}

module.exports = passengerService