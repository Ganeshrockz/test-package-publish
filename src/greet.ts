export class GreetMe {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public greet() {
        return "Hello " + this.name; 
    }
}