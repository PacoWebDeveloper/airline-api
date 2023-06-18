const { findOccupiedSeats } = require('../boardingPass/boardingPass.controller')
const assignSeat = (passengersList, airplane_id, seatsList) => {
  boardingPassController.findOccupiedSeats()
    .then(data => {
      console.log(data)
    })
    .catch(err => {
    console.error(err)
    })

}

module.exports = assignSeat