const boardingPassController = require('../boardingPass/boardingPass.controller')
const { findFreeSeatInSpecificClass, findSeatByColumnAndRow } = require('../seat/seat.controller')

const assignSeat = async (passengersList, airplane_id, occupiedSeats) => {

  const occupiedSeatsList = []
  const newPassengersList = []

for (let occupiedSeat of occupiedSeats)
  occupiedSeatsList.push(occupiedSeat.seat_id)

const freeSeats = await findFreeSeatInSpecificClass(passengersList[0].seatTypeId,occupiedSeatsList)

let columnSeat = []

for (let freeSeat of freeSeats) {
  if (!columnSeat.includes(freeSeat.seat_column))
    columnSeat.push(freeSeat.seat_column)
}

let seat1 = freeSeats[0].seat_id
passengersList[0].dataValues.seatId = seat1
newPassengersList.push(passengersList[0])
const index = columnSeat.indexOf(freeSeats[0].seat_column)

let i = 0
let found = false

for (let passenger of passengersList) {

  if (passenger.dataValues.seatId === undefined) {
    if (index > 0) {
      seatFound = await findSeatByColumnAndRow(columnSeat[index - 1], freeSeats[i].seat_row)
      if (seatFound.length === 0)
        seatFound = await findSeatByColumnAndRow(columnSeat[index + 1], freeSeats[i].seat_row)
      else seatFound = await findSeatByColumnAndRow(columnSeat[index], freeSeats[i].seat_row + 1)
    }
    
    if (index == 0)
      seatFound = await findSeatByColumnAndRow(columnSeat[index + 1], freeSeats[i].seat_row)
    
    if (seatFound.length != 0) {
      passenger.dataValues.seatId = seatFound.dataValues.seat_id  
      found = true
    }

    i++

    newPassengersList.push(passenger)
  }
}

return newPassengersList
}

module.exports = assignSeat