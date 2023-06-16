import UserBuilder from "./UserBuilder";

const user = new UserBuilder("John")
    .setAge(18)
    .build();

console.log(user);