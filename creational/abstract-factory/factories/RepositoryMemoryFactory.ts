import AbstractFactory from "./AbstractFactory";
import OrderRepository from "../repository/OrderRepository";
import OrderRepositoryMemory from "../repository/OrderRepositoryMemory";
import ProductRepository from "../repository/ProductRepository";
import ProductRepositoryMemory from "../repository/ProductRepositoryMemory";

export default class RepositoryMemoryFactory implements AbstractFactory {

    createOrderRepository(): OrderRepository {
        return new OrderRepositoryMemory();
    }
    createProductRepository(): ProductRepository {
        return new ProductRepositoryMemory();
    }
}