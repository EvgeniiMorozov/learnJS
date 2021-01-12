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
// Задача 4
let fn = null;



const createUser = (name, city) => {
    return {name: name, city: city};
}

console.dir(createUser('Vasyl', 'Moscow'));
*/

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
