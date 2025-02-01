"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}
exports.Animal = Animal;
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} meows.`);
    }
}
const animals = [new Dog("Rex"), new Cat("Whiskers")];
animals.forEach((animal) => {
    animal.makeSound();
});
// Output:=
// Rex barks.
// Whiskers meows.
