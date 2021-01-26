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