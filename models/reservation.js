const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '../db/reservations.json');

class Reservation {
    constructor(id, firstName, lastName, email, eventId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.eventId = eventId;
    }
    
    static getReservations() {
        return require(filePath);
    }
}

module.exports = Reservation;