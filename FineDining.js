const Restaurant= require("./Restaurant")

class FineDining extends Restaurant {
    constructor(dressCode, chef, name, address, cuisineType) {
        super(name, address, cuisineType);
        this.dressCode = dressCode;
        this.chef = chef;
    }
    display() {
        return `${this.name} located at ${this.address} serves ${this.cuisineType} made by chef ${this.chef} and requires customers to dress in ${this.dressCode}`
    }
}

module.exports = FineDining;