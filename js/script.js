'use strict';

/*
// Задача 1
let myName = 'Evgenii';
const age = 39;

const sayHello = (name) => {
    console.log('Приветствую, ' + name);
};
sayHello(myName);
*/

/*
// Задача 2

// получение массива из диапазона чисел(включая крайние числа)
const range = (a, b) => {
    let array = [];
    for (let i = a; i <= b; i++) {
        array.push(i);
    }
    return array;
};

console.log(range(15, 30));

// получение массива нечетных чисел из диапазона (включая крайние числа)
let rangeOdd = (a, b) => {
    let array = [];
    for (let i = a; i <= b; i++) {
        array.push(i);
    }
    let oddArray = array.filter(function (j) {
        return j % 2 !== 0
    })
    return oddArray;
};

console.log(rangeOdd(31, 51));
*/

/*
// Задача 3

const average = (a, b) => (a + b) / 2;
const square = (a) => a * a;
const cube = (a) => a * a * a;

const calculate = (a, b) => {
    let array = [];
    for (let i = a; i <= b; i++) {
//        let avg = average(square(i), cube(i));
//        array.push(avg);
        array.push(average(square(i), cube(i))); //чтоб не создавать лишнюю
        // переменную, можно сделать такую запись
    }
    return array;
}

console.log(calculate(0, 9));
 */

/*
// Задача 4.1

let fn = null;

fn = {name: 'Boris'};
console.log(fn); // --> { name: 'Boris' }

const foo = {name: 'Gennadi'};
console.log(foo); // --> { name: 'Gennadi' }

fn.name = 'Valera';
foo.name = 'Vasyl';
console.log(fn); // --> { name: 'Valera' }
console.log(foo); // --> { name: 'Vasyl' }

fn = {model: 'Ford'};
// foo = {model: 'Audi'}; // Ошибка: TypeError: Assignment to constant variable.

console.log(fn); // --> { model: 'Ford' }

// Итого:
// 1. Переменную можно присвоить другому объекту, а константу нет.
// 2. Свойства объектов можно менять, независимо от того, присвоена им
// переменная или константа. По сути объект остаётся один и тот же, меняется
// "наполнение" объекта.
*/

/*
// Задача 4.2
const createUser = (name, city) => {
    return {name: name, city: city};
}

console.dir(createUser('Vasyl', 'Moscow'));
 */

/*
// Задача 5
let phoneBook = [
    {name: 'Vasyl', phone: '+780445324635'},
    {name: 'Marcus Aurelius', phone: '+380445554433'},
    {name: 'Gennadi', phone: '+456245123471'},
    {name: 'Boris', phone: '+987852348621'},
    {name: 'Valera', phone: '+785364215968'},
];

// Реализация функции поиска номера абонента по его имени
const findPhoneByName = name => {
    let searchName = name;
    return phoneBook.find(person => person.name === searchName).phone;
};

console.log(findPhoneByName('Valera'));
*/
//Задайте справочник (объект) с ключами равными значениям поля name (из
// предыдущего примера) и значениями равными полю phone.

const phoneBook = {
    'Vasyl': '+780445324635',
    'Marcus Aurelius': '+380445554433',
    'Gennadi': '+456245123471',
    'Boris': '+987852348621',
    'Valera': '+785364215968',
};

const findPhoneByName = name => `${phoneBook[name]}`;

/*
    (phoneBook[name] === name
    ? `${phoneBook[name]}`
    : `А кто это?`
);
*/

console.log(findPhoneByName('Valera'));
console.log(findPhoneByName('Petr'));

