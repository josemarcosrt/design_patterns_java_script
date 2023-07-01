import { VehicleFactory } from './vehicle-factory';
import { VehicleInterface } from '../vehicle/VehicleInterface';
import { Bicycle } from '../vehicle/Bicycle';

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): VehicleInterface {
    return new Bicycle(vehicleName);
  }
}