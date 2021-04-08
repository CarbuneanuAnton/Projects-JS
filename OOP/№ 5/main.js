class User {
    
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends User {
    constructor (name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    getCourse() {
        if (new Date().getFullYear() - this.year < 1 || new Date().getFullYear() - this.year > 5) {
            return 'Ошибка. Неверные данные';
        }
        return `${new Date().getFullYear() - this.year} курс`;
    }
}

let student = new Student('Иван', 'Иванов', 2019);
console.log(student.name);
console.log(student.surname);
console.log(student.getFullName());
console.log(student.year);
console.log(student.getCourse());