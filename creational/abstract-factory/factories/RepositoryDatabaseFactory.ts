import AbstractFactory from "./AbstractFactory";
import OrderRepository from "../repository/OrderRepository";
import OrderRepositoryDatabase from "../repository/OrderRepositoryDatabase";
import ProductRepository from "../repository/ProductRepository";
import ProductRepositoryDatabase from "../repository/ProductRepositoryDatabase";

export default class RepositoryDatabaseFactory implements AbstractFactory {

    createOrderRepository(): OrderRepository {
        return new OrderRepositoryDatabase();
    }
    createProductRepository(): ProductRepository {
        return new ProductRepositoryDatabase();
    }
}