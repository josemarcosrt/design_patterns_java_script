import UserBuilder from "./UserBuilder";

export default class User {
    private name: string;
    private age: number | undefined;

    constructor(builder: UserBuilder) {
        this.name = builder.Name;
        this.age = builder.Age;
    }

    get Name() {
        return this.name;
    }
    get Age() {
        return this.age;
    }

}