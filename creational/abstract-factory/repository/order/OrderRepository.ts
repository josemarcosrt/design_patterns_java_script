import Order from "../../model/Order";

export default interface OrderRepository {
    get(id: number): Order;
}