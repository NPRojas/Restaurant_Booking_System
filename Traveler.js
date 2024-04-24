
class Traveler {
    constructor(name, origin, destination) {
        this.name = name;
        this.origin = origin;
        this.destination = destination;
    }

    displayDetails() {
        return `${this.name} from ${this.origin} is headed towards ${this.destination}`;
    }
}

module.exports = Traveler;