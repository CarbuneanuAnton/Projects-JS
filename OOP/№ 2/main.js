class Person {
    
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    set setName(name) {
        if (name == '') {
            throw new Error('Ошибка. Имя не может быть пустым.');
        }
        this.name = name;
    }

    set setSurname(surname) {
        if (surname == '') {
            throw new Error('Ошибка. Фамилия не может быть пустой.');
        }
        this.surname = surname;
    }

    get getName() {
        return this.name;
    }

    get getSurname() {
        return this.surname;
    }
}

let worker = new Person('Иван', 'Иванов');
console.log(worker.getName);
console.log(worker.getSurname);
console.log(worker.setSurname = 'Петров');
console.log(worker.getSurname);