import { VehicleFactory } from './vehicle-factory';
import { Car } from '../vehicle/Car';
import { VehicleInterface } from '../vehicle/VehicleInterface';

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): VehicleInterface {
    return new Car(vehicleName);
  }
}