class Person {
    
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
}

let worker = new Person('Anton', 'Carbuneanu');
console.log(worker.name);
console.log(worker.surname);