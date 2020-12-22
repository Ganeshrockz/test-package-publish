"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetMe = void 0;
class GreetMe {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return "Hello " + this.name;
    }
    greetBasedOnTime() {
        let date = new Date();
        let hour = date.getHours();
        let greetMessage = "";
        if (hour < 12) {
            greetMessage = "Good morning ";
        }
        else if (hour >= 12 && hour <= 17) {
            greetMessage = "Good noon ";
        }
        else {
            greetMessage = "Good night ";
        }
        return greetMessage + this.name;
    }
}
exports.GreetMe = GreetMe;
