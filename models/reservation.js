const path = require('path');
const fs = require('fs');

class Reservation {
    constructor(id, firstName, lastName, email, eventId) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.eventId = eventId;
    }
}