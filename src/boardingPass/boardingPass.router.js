const router = require('express').Router()
const boardingPassService = require('./boardingPass.services')

router.get('/flights/:id/passengers', boardingPassService.getBoardingPassByFlightId)

module.exports = router