const router = require('express').Router()

const airplaneServices = require('./airplane.services')

router.get('/airplanes', airplaneServices.getAllAirplanes)

module.exports = router