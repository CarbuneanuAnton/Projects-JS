const number = Number(prompt('Введи число: '));

if (number < 0) {
alert(-1);
} else if (number > 0) {
alert(1);
} else if (number === 0) {
alert(0);
} else {
alert('Error');
}