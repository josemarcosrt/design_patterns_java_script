"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleFactory = void 0;
var VehicleFactory = /** @class */ (function () {
    function VehicleFactory() {
    }
    VehicleFactory.prototype.pickUp = function (customerName, vehicleName) {
        var car = this.getVehicle(vehicleName);
        car.pickUp(customerName);
        return car;
    };
    return VehicleFactory;
}());
exports.VehicleFactory = VehicleFactory;
