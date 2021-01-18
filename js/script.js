'use strict';

// Задача 1
/*
// Реализация с помощью цикла for-of
const sum = (...args) => {
    let result = 0;
    for (let arg of args) {
        result += arg;
    }
    return result;
};
console.log(sum(10, -2, -3)); // -5
console.log(sum(1, -3, 8, 21, -11, 7, -6)); // 17
*/

/*
// Реализация с помощью цикла for
const sum = (...args) => {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        result += args[i];
    }
    return result;
};
console.log(sum(10, -2, -3)); // -5
console.log(sum(1, -3, 8, 21, -11, 7, -6)); // 17
*/

/*
// Реализация с помощью цикла while
const sum = (...args) => {
    let result = 0;
    let i = 0;
    while (i < args.length) {
        result += args[i];
        i++;
    }
    return result;
};
console.log(sum(10, -2, -3)); // -5
console.log(sum(1, -3, 8, 21, -11, 7, -6)); // 17
*/

/*
// Реализация с помощью цикла do-while
const sum = (...args) => {
    let result = 0;
    let i = 0;
    do {
        result += args[i];
        i++;
    } while (i < args.length);
    return result;
};
console.log(sum(10, -2, -3)); // -5
console.log(sum(1, -3, 8, 21, -11, 7, -6)); // 17
*/

/*
// Реализация с помощью метода массивов Array.prototype.reduce()

const sum = (...args) => args.reduce((result, num) => result + num);

console.log(sum(10, -2, -3)); // -5
console.log(sum(1, -3, 8, 21, -11, 7, -6)); // 17
*/

// Задача 2