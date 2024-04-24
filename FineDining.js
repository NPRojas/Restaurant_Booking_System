class FineDining extends Restaurant {
    constructor(dressCode, chef, name, address, cuisineType) {
        super(name, address, cuisineType);
        this.dressCode = dressCode;
        this.chef = chef;
    }
}

module.exports = FineDining;