class Booking {
    constructor(customerName, date, time, numberOfGuests) {
        this.customerName = customerName;
        this.date = date;
        this.time = time;
        this.numberOfGuests = numberOfGuests;
    }

    bookingDetails() {
        return `${this.customerName} has a reservation for ${this.numberOfGuests} on the ${this.date} at ${this.time}`;
    }
}

module.exports = Booking;