'use strict';

/*
function createCalcFunction(n) {
    return function () {
        console.log(1000 * n);
    };
};

const calc = createCalcFunction(42);

// console.log(calc); //[Function (anonymous)]

calc();

 */

/*
const createIncrementor = (n) => {
    return num => n + num;
};

const addOne = createIncrementor(1);
// переменную n замкнули на 1

console.log(addOne(10)); // 11
console.log(addOne(41)); // 42

const addTen = createIncrementor(10);
console.log(addTen(10)); // 20
console.log(addTen(41)); // 51

 */

/*
const urlGenerator = (domain) => {
    return (url) => `https://${url}.${domain}`;
};

const comUrl = urlGenerator('com');

console.log(comUrl('google')); // https://google.com
console.log(comUrl('netflix')); // https://netflix.com

const ruUrl = urlGenerator('ru');

console.log(ruUrl('yandex')); // https://yandex.ru
console.log(ruUrl('vkontakte')); // https://vkontakte.ru

 */


/*
// Задача

Написать свою функцию bind
Пример работы:

const logPerson = () => {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
};

const person1 = {name: 'Mikhail', age: 22, job: 'Frontend',};
const person2 = {name: 'Elena', age: 19, job: 'SMM',};

bind(person1, logPerson);
bind(person2, logPerson);
 */

function bind (context, foo) {
    return function (...args) {
        foo.apply(context, args);
    };
};

function logPerson () {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
};

const person1 = {name: 'Mikhail', age: 22, job: 'Frontend'};
const person2 = {name: 'Elena', age: 19, job: 'SMM'};

bind(person1, logPerson)();
bind(person2, logPerson)();
// Person: Mikhail, 22, Frontend
// Person: Elena, 19, SMM

