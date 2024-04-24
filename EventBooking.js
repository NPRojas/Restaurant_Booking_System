const Booking= require("./Booking")

class Event extends Booking {
    constructor(customerName, date, time, numberOfGuests, eventType, decorations) {
        super(customerName, date, time, numberOfGuests);
        this.eventType = eventType;
        this.decorations = decorations;
    }
    display() {
        return `${this.customerName} has a reservation on ${this.date} at ${this.time} for ${this.numberOfGuests} guests. This reservation is for a ${this.eventType} and needs ${this.decorations}`
    }
}

module.exports = Event;