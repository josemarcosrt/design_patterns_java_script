"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.pickUp = function (customerName) {
        console.log("".concat(this.name, " est\u00E1 buscando ").concat(customerName));
    };
    Car.prototype.stop = function () {
        console.log("".concat(this.name, " parou"));
    };
    return Car;
}());
exports.Car = Car;
