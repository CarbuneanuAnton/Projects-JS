let sum = (numbers) => {
    return numbers.reduce((accumulator, current) => accumulator + current, 0);
}

let average = (marks) => {
    if (marks.length < 1) {
        return 'no marks';
    }
    return sum(marks) / marks.length;
}

let markMinFive = (marks) => {
    let minMark = marks.find(mark => mark < 5);
    if (minMark !== null) {
        return 'error';
    }
    return minMark;
}

console.log(sum([2, 3, 9, 21, 19]));
console.log(average([6, 6, 7, 9, 3, 10, 4]));
console.log(markMinFive([5, 5.22, 6, 7.91, 9.18, 10]));