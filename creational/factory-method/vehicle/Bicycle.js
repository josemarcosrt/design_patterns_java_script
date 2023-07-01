"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bicycle = void 0;
var Bicycle = /** @class */ (function () {
    function Bicycle(name) {
        this.name = name;
    }
    Bicycle.prototype.pickUp = function (customerName) {
        console.log("".concat(this.name, " est\u00E1 buscando ").concat(customerName));
    };
    Bicycle.prototype.stop = function () {
        console.log("".concat(this.name, " parou"));
    };
    return Bicycle;
}());
exports.Bicycle = Bicycle;
