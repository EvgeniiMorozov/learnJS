'use strict';

// Задача 1
/*
// iterate(object, callback)
// callback(key, value, object)

const obj = { a: 1, b: 2, c: 3, };

// функция для колбэк-вызова
const objIteration = object => {
    for (const key in object) {
        let value = object[key];
        console.log(`{ key: ${key}, value: ${value} }`);
    }
};

const iterate = (object, callback) => callback(object);

iterate(obj, objIteration);
*/

// Задача 2
/*
const store = value => {
    return () => console.log(value);
};
const read = store(5);
const value = read();
console.log(value); // 5

 */

// Задача 3

/*
3.	Реализуйте функцию contract(fn, ...types) которая оборачивает fn (первый аргумент)
 и проверяет типы аргументов (все аргументы кроме первого и последнего)
 и результата (последний аргумент), гегенрируя исключение TypeError,
  если типы не совпадают.
  Как в следующем примере:

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5

and

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res = concatStrings('Hello ', 'world!');
console.dir(res); // Output: Hello world!
 */

/*
Для решения задачи надо сделать функцию для проверки типа данных элементов
массива
если элементы одного типа, то возвращает true, иначе false

const checkType = array => {
    return array.every((el, i, arr) => typeof arr[0] === typeof arr[i]);
};

let arr = [1, 2, 3, 4, 5, 6, 7];
let arr1 = [1, 2, 3, 'string', 5, 6, 7];
let arr2 = ['string1', 'string2', 3, 'string4', 5];
let arr3 = ['string1', 'string2', 'string3', 'string4'];

console.log(checkType(arr)); // true
console.log(checkType(arr1)); // false
console.log(checkType(arr2)); // false
console.log(checkType(arr3)); // true

Также надо доработать функции add и concat( далее concatStrings )

const add = array => array.reduce((result, num) => result + num);
const concatStrings = array => array.join('');

*/

const contract = (fn,...types) => {
    let array = types;
    const checkType = array => array.every((el, i, arr) => typeof arr[0] === typeof arr[i]);

    const add = array => checkType(array) === true
        ? array.reduce((result, num) => result + num)
        : console.log('Type error !!!');

    const concatStrings = array => checkType(array) === true
        ? array => array.join('')
        : console.log('Type error !!!');
};

// const add = (a, b) => a + b;
const addNumbers = contract(add);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5








