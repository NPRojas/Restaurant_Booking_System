const Restaurant= require("./Restaurant")

class Cafe extends Restaurant {
    constructor(hasWifi, name, address) {
        super(name, address);
        this.hasWifi = hasWifi;
    }
    display() {
        if (this.hasWifi == true) {
            return `${this.name} located at ${this.address} has Wifi!`
        } else {
            return `${this.name} located at ${this.address} does not have Wifi!`
        }
    }
}

module.exports = Cafe;