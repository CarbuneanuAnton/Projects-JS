let sumInputNumbers = () => {
    let numbersArray = [];
    let sumOfNumbers = 0;

    while (true) {
        let number = prompt('Введите число: ', 0);

        if (number === '' || number === null || !isFinite(number)) {
            break;
        }

        console.log(number);
        numbersArray.push(Number(number));
    }

    for (let item of numbersArray) {
        sumOfNumbers += item;
    }

    return sumOfNumbers;
}

alert('Сумма введенных чисел: ' + sumInputNumbers());