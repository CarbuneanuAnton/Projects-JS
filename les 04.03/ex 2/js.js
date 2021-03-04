class Person {

constructor(name, surname) {
this.name = name;
this.surname = surname;
}
	
	get getname(){
		return this.name;
	}
	get getsurname(){
		return this.surname;
	}

}

let worker = new Person('Ivan', 'Ivanov');
console.log(worker.getname);
console.log(worker.getsurname);
console.log(worker.getsurname = 'Petrov');
console.log(worker.getsurname);