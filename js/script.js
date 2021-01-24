'use strict';

// Функции высшего порядка
/*
const { sin } = Math; // деструктивное присвоение

const inverse = f => x => 1 / f(x);

const cosecant = inverse(sin);

const a = cosecant(5);
console.log('cosecant(5) = ', a);

const sin2 = inverse(cosecant);
console.log('sin(0) = ', sin(0), '=', sin2(0));
// Произвели математические вычисления.
// Отобразили одну функцию в другую
*/

// Callback
/*
const fn = (par, callback) => {
    // если нет никакого аргумента, то
    if(!par) {
        // вызываем колбэк с ошибкой, т.к. чтобы вычислить на нужен параметр
        callback(new Error('Parameter needed'));
        return;
    }
    callback(null, `Data ${par}`);
    return `Value`; // в качестве результата функции fn выдаем value
};

const res = fn('example', (err, data) => {
    if(err) throw err;
    console.dir({ data });
});

console.dir({ res });
// после запуска у нас исполнился консоль-дир Дата, а потом рес.
// { data: 'Data example' }
// { res: 'Value' }
// Колбэк - когда только на вход функцию принимаем и потом её вызываем.
*/

// Замыкания ( на примере высшего порядка )
/*
const fn = a => {
    const b = 'Closure variable';
    // возврат из функции fn функции с одним аргументом с
    return c => {
        console.dir({a, b, c}); // в этом контексте функции, которая возвращается,
        // будут находиться три переменные. a и b получатся из замыкания.
    };
};

const f1 = fn('Parameter 1');
f1('Parameter 2');

const f2 = fn('Parameter X');
f2('Parameter Y');
// На выходе пораждается функции, которая замкнута на какой то контекст.
// Создали замыкание, когда мы на вход не принимаем функцию, а на выход выдаётся функция.
*/

// Пример выполнения асинхронного выполнения кода
/*
const fn = () => {
    console.log('Callback from timer');
};
setTimeout(fn, 5000);
*/

//callback
/*
const add = (a, b) => a + b;
const sum = (a, b, callback) => callback(a + b);

console.log('add(5, 2) = ', add(5, 2));
*/

// callback use
/*
const fs = require('fs');

fs.readFile('./function.js', 'utf8', (err, data) =>{
    console.log({lines: data.split('\n').length});
});
console.log('end');
*/

// Именованные callback`и
/*
const fs = require('fs');

const print = (fileName, err, data) => {
    console.log({lines: data.split('\n').length});
};

const fileName = './function.js';
const callback = print.bind(null, fileName);

fs.readFile(fileName, 'utf8', callback);
*/

// Обработчики событий
/*
const iterate= (array, listener) => {
    for (const item of array) {
        listener(item);
    }
};

const cities = ['Kiev', 'London', 'Beijing'];

const print = city => {
    console.log('City', city);
};
iterate(cities, print);
*/

// Event
/*
const adder = initial => {
    let value = initial; // положили число в value. value будет доступен из замыкания
    const add = delta => { // создаем функцию add, в которую передаем delta
        value += delta;
        if(value >= add.maxValue) add.maxEvent(value);
        return add; // возврат на саму себя
    };
    add.max = (max, event) => {
        add.maxValue = max;
        add.maxEvent = event; // саму ссылку на функцию обработки события, сохранили в свойство maxEvent
        return add; // вернули add из этого max
    };
    return add; // снова вернули add из этого сумматора
};

const maxReached = value => {
    console.log('max value, value: ' + value);
};

const a1 = adder(10).max(100, maxReached)(-12);

a1(25);
a1(50);
a1(75);
a1(100);
a1(-200)(50)(30);
*/

// Замыкания пример
// Замыкание - функция замкнула в себе некоторую информацию из области видимости
/*
const createPrinter = () => {
    const name = 'King';
    const printName = () => {
        console.log(name);
    };
    return printName;
};

const myPrinter = createPrinter();
myPrinter(); // King - запомненное значение, при том, что область видимости, где оно было задано больше не существует.
*/

// Рекурсия - что-то описывается через самого себя, содержит себя в своём же описании.
/*
// n! = 1 * 2 * 3 * ... * n
const factorial = (n) => {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
};

console.log(factorial(4));
*/
// базовый случай (точка, в которой нужно остановиться) в нашем примере 1