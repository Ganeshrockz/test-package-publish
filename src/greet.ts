export class GreetMe {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public greet() {
        return "Hello " + this.name; 
    }

    public greetBasedOnTime() {
        let date = new Date();
        let hour = date.getHours();
        let greetMessage = "";

        if (hour < 12) {
            greetMessage = "Good morning ";
        }
        else if (hour >= 12 && hour <=17) {
            greetMessage = "Good noon ";
        }
        else {
            greetMessage = "Good night ";
        }

        return greetMessage + this.name;
    }
}