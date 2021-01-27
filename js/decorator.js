'use strict';

/*
// напишем функцию для вычисления факториала !n

const factorial = function (n) {
    return (n !== 1) ? factorial(n - 1) * n : n;
};
console.log(factorial(5)); // 120
*/

// Напишем декоратор, который будет расширять функционал ф-ии func
//декоратор будет выводить в консоль её результат

let factorial = function foo(n) {
    return (n !== 1) ? foo(n - 1) * n : n;
};

function logResultDecorator(func) {
    return function () {
        const result = func.apply(this, arguments);
        console.log('Result: ', result);
        return result;
    }
}

factorial = logResultDecorator(factorial);

factorial(6); // 720