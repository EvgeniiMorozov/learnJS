'use strict';

/*
alert('Я' > 'А'); // true
alert('Коты' > 'Кода'); //true
alert('Сонный' > 'Сон'); // true

alert('2' > 1); // true
alert('01' == 1); //true

// 0 и '' равно false
alert(0 == false); //true
alert(0 === false); //false

alert('' == false); // true
alert('' === false); // false
*/

/*
const INTERVAL = 500;
let counter = 0;
const MAX_VALUE = 10;
let timer = null;

const event = () => {
    if(counter === MAX_VALUE) {
        console.log('The end');
        clearInterval(timer);
        return;
    }
    console.dir({ counter, date: new Date() });
    counter++;
};

console.log('Begin');
timer = setInterval(event, INTERVAL);
 */

/*
// Loops
const MAX_VALUE = 10; // литерал числа - то, как мы объявляем число в коде

console.log('Begin');

// JS позволяет объявить переменную i прямо внутри цикла
for (let i = 0; i < MAX_VALUE; i++) {
    console.dir({ i, date: new Date() });
}
console.log('The end');
 */

/*
// Function
const add = (a, b) => a + b;

console.log('Add numbers: 5 + 2 = ' + add(5, 2));
console.log('Add floats: 5.1 + 2.3 = ' + add(5.1, 2.3));
console.log(`Concatenate: '5' + '2' = '${add('5', '2')}'`);
console.log('Subtraction: 5 + (-2) = ' + add(5, -2));
 */

/*
// Объекты
const welcome = person => {
    console.log(`Ave, ${person.name}`); // Интерполяция (строковые шаблоны) - подставлять выражения и переменные в строчку
};
// Создаем литералы объектов
const marcus = {name: 'Marcus Aurelius'};
const mao = {name: 'Mao Zedong'};
const cartesius = {name: 'Rene Descartes'};

welcome(marcus);
welcome(mao);
welcome(cartesius);
*/

/*
// Массивы
const welcome = person => {
    console.log(`Ave, ${person.name}`);
};
// Создание литерала массива объектов
const persons = [
    {name: 'Marcus Aurelius'},
    {name: 'Mao Zedong'},
    {name: 'Rene Descartes'},
];

for (let person of persons) {
    welcome(person);
}
 */

/*
// Способы определения функций

// 1. - Function declaration ( никуда ничего не присвается. если нет return, то выведет значение undefined )
function inc(a) {
    return a + 1;
}

// 2. - Function expression ( значение функционального типа присваевается в идентификатор sum  )
const sum = function(a, b) {
    return a + b;
}

// 3. - Lambda expression (стрелочная функция)
const max = (a, b) => (a > b ? a : b);

// 4. - Lambda function
const avg = (a, b) => {
    const s = sum(a, b);
    return s / 2;
}

console.log('inc(5) = ' + inc(5));
console.log('sum(1, 3) = ' + sum(1, 3));
console.log('max(8, 6) = ' + max(8, 6));
console.log('avg(8, 6) = ' + avg(8, 6));

 */
