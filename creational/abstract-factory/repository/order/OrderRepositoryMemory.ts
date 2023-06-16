import Order from "../../model/Order";
import OrderRepository from "./OrderRepository";

export default class OrderRepositoryMemory implements OrderRepository {

    get(id: number): Order {
        return new Order();
    }
}