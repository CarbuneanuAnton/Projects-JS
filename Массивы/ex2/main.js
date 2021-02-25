const students = [
    {
        name: 'Gleb',
        marks: [4, 9, 5, 6, 10]
    },
    {
        name: 'Alex',
        marks: [2, 10, 5, 7, 8]
    },
    {
        name: 'Dima',
        marks: [8, 7, 9, 6, 5]
    },
    {
        name: 'Maxim',
        marks: [2, 6, 3, 2, 6]
    },
    {
        name: 'Denis',
        marks: [3, 4, 5, 5, 1]
    }
];

// Выводит имя и среднюю оценку для каждого элемента массива
let printMarks = (array) => {
    for (let item of array) {
        console.log(item.name + ': ' + item.average);
    }
}

// Считает среднюю оценку для каждого элемента массива
let middleMark = (students) => {
    const marks = [];
    for (let i in students) {
        let sum = 0;
        for (let j in students[i].marks) {
            sum += students[i].marks[j];
        }
        const student = {};

        student.name = students[i].name;
        student.average = sum / students[i].marks.length;
        marks.push(student);
    }
    return marks;
}

printMarks(middleMark(students));

// Выводит учеников, у которых средняя оценка < 5
let middleMarkMinFive = (students) => {
    const studentsMarks = middleMark(students);
    const array = [];

    for (let item of studentsMarks) {
        if (item.average < 5) {
            array.push(item.name);
        }
    }
    return array;
}

console.log('Ученики с оценкой ниже 5:' + middleMarkMinFive(students).map((value) => {
    return ' ' + value;
}));

// Находит учеников с максимальной и минимальной оценкой
let minMaxMark = (students) => {
    const studentsMarks = middleMark(students);
    let nameMin = '';
    let nameMax = '';
    let min = 0;
    let max = 0;

    for (let item of studentsMarks) {
        if (item.average > max) {
            max = item.average;
            nameMax = item.name;
        }

        if (item.average < max) {
            min = item.average;
            nameMin = item.name;
        }
    }

    console.log('Минимальная оценка: ', min, 'у ученика', nameMin);
    console.log('Максимальная оценка: ', max, 'у ученика', nameMax);
}

minMaxMark(students);

// Сортирует учеников по средней оценке по убыванию 
// (с самой большой средней в начале, с наименьшим в конце списка)
let sortMarks = (students) => {
    const studentsMarks = middleMark(students);
    return studentsMarks.sort((a, b) => a.average < b.average ? 1 : -1);
}

printMarks(sortMarks(students));

// Выводит тех учеников чья средняя оценка больше средней оценки всего класса
let biggestMark = (students) => {
    const studentsMarks = middleMark(students);
    const studentsNames = [];
    let sum = 0;
    for (let item of studentsMarks) {
        sum += item.average;
    }
    const average = sum / studentsMarks.length;

    for (let item of studentsMarks) {
        if (average < item.average) {
            studentsNames.push(item.name);
        }
    }
    return studentsNames;
}

for (let name of biggestMark(students)) {
    console.log('Ученики со ср. оценкой выше, чем ср. оценка всего класса: ', name);
}