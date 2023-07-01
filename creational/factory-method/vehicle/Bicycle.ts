import { VehicleInterface } from './VehicleInterface';

export class Bicycle implements VehicleInterface {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }

  stop(): void {
    console.log(`${this.name} parou`);
  }
}