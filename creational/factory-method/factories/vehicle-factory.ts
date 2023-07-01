import { VehicleInterface } from '../vehicle/VehicleInterface';

export abstract class VehicleFactory {
  // Factory Method
  abstract getVehicle(vehicleName: string): VehicleInterface;

  pickUp(customerName: string, vehicleName: string): VehicleInterface {
    const car = this.getVehicle(vehicleName);
    car.pickUp(customerName);
    return car;
  }
}