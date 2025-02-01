export class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log(`${this.name} meows.`);
    }
}

const animals: Animal[] = [new Dog("Rex"), new Cat("Whiskers")];

animals.forEach((animal) => {
    animal.makeSound();
});
// Output:=
// Rex barks.
// Whiskers meows.





