const BoardingPass = require('../models/boardingPass.model')
const flight = require('../flight/flight.controller')
const passengerController = require('../passenger/passenger.controller')
const seatTypeController = require('../seat/seat.controller')

const boardingPassController = {
  findBoardingPassByFlightId: async (flighId) => {

    let passengersArr = []
    
    const data = await BoardingPass.findByPk(flighId)

    const customersByPurchase = await boardingPassController.findBoargingPassByPurchaseId(data.dataValues.purchase_id)
    
    const flightData = await flight.findFlightById(data.flight_id)
    
    for(let customer of customersByPurchase){
      
      const passenger = await passengerController.findPassengerById(customer.dataValues.passenger_id)
      passenger.dataValues.boardingPassId = data.dataValues.boarding_pass_id
      passenger.dataValues.purchaseId = data.dataValues.purchase_id
      passenger.dataValues.seatTypeId = data.dataValues.seat_type_id

      passengersArr.push(passenger) 
    }

    /* const seatData = await seatTypeController.findSeatBySeatTypeId(data.seat_type_id) */
    
    const newFlightData = {
      ...flightData.dataValues, 
      passengers: passengersArr
    }
    
    return newFlightData
  },

  findBoargingPassByPurchaseId: async (purchase_id) => {
    const data = await BoardingPass.findAll({
      where: {
        purchase_id
      }
    })
    return data
  }
}

module.exports = boardingPassController