let car = {
    brand: 'BMW',
    model: 'M5', 
    year: 2025,
    price: '2.01 Crore',
    
    engine: {
        type: 'V8',
        horsepower: 300
    },
    
    colors: ['M Carbon Black metallic', 'Black Sapphire metallic', 'Sophisto Grey brilliant effect metallic'],
    
    carInfo: function() {
        return `Brand: ${this.brand}, Model: ${this.model}, Price: ${this.price}`;
    },
    
    engineInfo: function() {
        return `Engine: ${this.engine.type}, Horsepower: ${this.engine.horsepower} HP`;
    }
};

// Test object
console.log(car);

// Updating properties
car.price = '2.05 Crore';           
car.owner = 'Chandan';
car.sold = false;

// Add a new color dynamically
car.colors.push('White');

console.log("\nUpdated car object:");
console.log(car);

// Test methods
console.log("\nCar Info:", car.carInfo());
console.log("Engine Info:", car.engineInfo());
