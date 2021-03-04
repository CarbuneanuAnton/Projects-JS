let styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

styles[(Math.trunc(styles.length - 1) / 2)] = 'Классика';
console.log(styles);

console.log(styles.shift());
console.log(styles);

styles.unshift('Рэп', 'Рэгги');
console.log(styles);