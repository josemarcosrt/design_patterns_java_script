"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomCarAlgorithm = void 0;
var car_factory_1 = require("../factories/car-factory");
var bicycle_factory_1 = require("../factories/bicycle-factory");
var random_numbers_1 = require("../utils/random-numbers");
function randomCarAlgorithm() {
    var carFactory = new car_factory_1.CarFactory();
    var bicycleFactory = new bicycle_factory_1.BicycleFactory();
    var car1 = carFactory.getVehicle('Fusca');
    var car2 = carFactory.getVehicle('Celta Preto');
    var bicycle = bicycleFactory.getVehicle('Bicycle');
    var cars = [car1, car2, bicycle];
    return cars[(0, random_numbers_1.randomNumbers)(cars.length)];
}
exports.randomCarAlgorithm = randomCarAlgorithm;
