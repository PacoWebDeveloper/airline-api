const responses = require('../utils/handleResponses')
const airplaneController = require('./airplane.controller')

const airplaneServices = {
  getAllAirplanes: (req, res) => {
    airplaneController.findAllAirplanes()
      .then(data => {
        responses.success({
          res,
          status: 200,
          message: 'Airplanes found sucessfully',
          data
        })
      })
      .catch(err => {
        responses.error({
          res,
          status: 400,
          message: 'Airplanes not found',
          data: err
        })
      })
  }
}

module.exports = airplaneServices