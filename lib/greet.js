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
}
exports.GreetMe = GreetMe;
