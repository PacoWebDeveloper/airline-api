const router = require('express').Router()
const passengerService = require('./passenger.services')

router.get('/passenger/:id', passengerService.getPassengrById)

module.exports = router