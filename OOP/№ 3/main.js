class Worker {
    
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    get getSalary() {
        return this.rate * this.days;
    }
}

let worker1 = new Worker('Иван', 'Иванов', 10, 31);
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days);
console.log(worker1.getSalary);

let worker2 = new Worker('Петр', 'Петров', 35, 15);
console.log(worker2.name);
console.log(worker2.surname);
console.log(worker2.rate);
console.log(worker2.days);
console.log(worker2.getSalary);

console.log('Общая зарплата двух работников: ', worker1.getSalary + worker2.getSalary);