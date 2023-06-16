import User from "./User";

export default class UserBuilder {
    private name: string;
    private age?: number;

    constructor(name: string) {
        this.name = name;
    }

    get Name() {
        return this.name;
    }
    setAge(value: number): UserBuilder {
        this.age = value;
        return this;
    }
    get Age() {
        return this.age;
    }

    build(): User {
        return new User(this);
    }
}