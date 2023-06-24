import Component from "./Component";

export default class Object implements Component {
    private string: String;

    constructor(string: String) {
        this.string = string;
    }

    public operation(): void {
        console.log("`operation` of Object", this.string, " is called.");
    }
}