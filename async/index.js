class Retangle {
     constructor (width , height ,color){
        this.width = width;
        this.height = height;
        this.color = color;
     }

     area() {
        const area = this.width * this.height;
        return area;
     }
     paint(){
        console.log(`paint in color ${this.color}`);
    }
}

class Car {
    constructor(wheels,  brand, number){
        this.wheels = wheels;
        this.brand = brand;
        this.number = number;
    }

    Brand(){
        console.log(`make of the car ${this.brand}`);
    }

    wheel(){
        const wheels = this.wheels * this.number;
        return wheels;
    }


}


const car = new Car( 4,'black',7);
const brand = car.Brand();
const wheels = car.wheel()
console.log(wheels)



//Creating a object
const rect = new Retangle(4,6, 'RED'); 

const Area = rect.area();
const paint = rect.paint(); 
console.log(Area);

const date = new Date();
console.log(date.getFullYear())



//map
const map = new Map();
map.set(('name' , 'Nabeel'));
map.set(('age', 30))

const firstname = map.get('name');
console.log(firstname)
const age = map.get('name');
console.log(age);