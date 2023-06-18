const BoardingPass = require('../models/boardingPass.model')
const flight = require('../flight/flight.controller')
const passengerController = require('../passenger/passenger.controller')
const seatTypeController = require('../seat/seat.controller')

const boardingPassController = {
  findBoardingPassByFlightId: async (flighId) => {
    
    const data = await BoardingPass.findByPk(flighId)
    
    const flightData = await flight.findFlightById(data.flight_id)
    
    const passengerData = await passengerController.findPassengerById(data.passenger_id)

    const seatData = await seatTypeController.findSeatBySeatTypeId(data.seat_type_id)

    passengerData.dataValues.boardingPassId = data.dataValues.boarding_pass_id
    passengerData.dataValues.purchaseId = data.dataValues.purchase_id
    passengerData.dataValues.seatTypeId = data.dataValues.seat_type_id
    passengerData.dataValues.seatId = seatData.dataValues.seat_id
    
    const newFlightData = {
      ...flightData.dataValues, 
      passengers: {
        ...passengerData.dataValues
      }
    }
    
    return newFlightData
  }
}

module.exports = boardingPassController