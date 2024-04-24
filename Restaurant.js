class Restaurant {
    constructor(name, address, cuisineType) {
        this.name = name;
        this.address = address;
        this.cuisineType = cuisineType;
    }

    describe() {
        return `This ${this.name} is located at ${this.address} serves ${this.cuisineType}`;
    }
}

module.exports = Restaurant;
