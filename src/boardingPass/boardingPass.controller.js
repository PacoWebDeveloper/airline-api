const BoardingPass = require('../models/boardingPass.model')
const flight = require('../flight/flight.controller')
const passengerController = require('../passenger/passenger.controller')
const Seat = require('../seat/seat.controller')
const { Op } = require('sequelize')
const assignSeat = require('../utils/assignSeat')

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

    const occupiedSeats = await boardingPassController.findOccupiedSeats(data.dataValues.seat_type_id)

    let newPassengers = []
    
    try {
      newPassengers = await assignSeat(passengersArr, flightData.dataValues.airplane_id, occupiedSeats)
    } catch(err) {
      throw err
    }    

    const newFlightData = {
      ...flightData.dataValues, 
      passengers: newPassengers
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
  },

  findOccupiedSeats: async (seat_type_id) => {
    const data = await BoardingPass.findAll({
      where: {
        [Op.and]: {
          seat_id: {
            [Op.not]: null
          },
          seat_type_id        
        }
        
      }
    })
    return data
  },

  findFreeSeatInSpecificClass: async (seatTypeId, occupiesSeatsList ) => {
    const freeSeats = await Seat
  }
}

module.exports = boardingPassController