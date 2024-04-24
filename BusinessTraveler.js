const Traveler= require("./Traveler")

class BusinessTraveler extends Traveler {
    constructor(company, budget, name, origin, destination) {
        super(name, origin, destination);
        this.company = company;
        this.budget = budget;
    }
    display() {
        return `${this.name} from ${this.company} located in ${this.origin} is headed towards ${this.destination} with a budget of ${this.budget}`
    }
}
module.exports= BusinessTraveler