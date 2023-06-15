const router = require('express').Router()
const boardingPassService = require('./boarding_pass.services')

router.get('/flights/:id/passengers', boardingPassService.getBoardingPassByFlightId)

module.exports = router