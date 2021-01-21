'use strict';

// Деструктуризация объектов
/*
const user = {
    firstName: 'Evgenii',
    lastName: 'Morozov',
};
 */
/*
const firstName = user.firstName;
const lastName = user.lastName;

console.log(firstName); // Evgenii
console.log(lastName); // Morozov
*/
/*
Но если объект будет большим, то задача вывода и обработки данных усложнится
и можно легко запутаться.
При обработке объектов можно воспользоваться деструктуризацией ( или
деструктурирующим присваиванием ).

Деструктурирующее присваивание – это специальный синтаксис, который позволяет
нам «распаковать» массивы или объекты в кучу переменных, так как иногда они
более удобны. Деструктуризация также прекрасно работает со сложными функциями,
которые имеют много параметров, значений по умолчанию и так далее.
*/
/*
const {firstName, lastName} = user;
// !!! Переменные( firstName, lastName ), которые надо "вытащить" из объекта,
// должны называться так же как и ключи объекта

// console.log(firstname);
// ReferenceError: firstname is not defined

console.log(firstName);
//Evgenii
console.log(lastName);
//Morozov
*/
/*
const {firstName, lastName, age = 30} = user;
// вызывается переменная age и ей задаётся значение по-умолчанию, т.е.
// если такого ключа в объекте не будет, то переменной age присвоется 30.

console.log(age);
// 30
*/
/*
user.age = 35;

console.log(user); // { firstName: 'Evgenii', lastName: 'Morozov', age: 35 }

const {firstName, lastName, age = 30} = user;
console.log(age);
// 35
*/
/*
const user = {
    firstName: 'Evgenii',
    lastName: 'Morozov',
    age: 39,
};
// При деструктуризации можно поменять имена переменных
const {firstName: name, lastName, age: years = 30} = user;

//console.log(firstName); //ReferenceError: firstName is not defined
console.log(name); // Evgenii
console.log(years); // 39
*/
/*
// Работа с вложенными объектами
const user = {
    firstName: 'Evgenii',
    lastName: 'Morozov',
    age: 39,
    info: {
        work: 'SomeWork',
        skills: ['html', 'css'],
    },
};

// const {info} = user;
// console.log(info); // { work: 'SomeWork', skills: [ 'html', 'css' ] }

const {info: {work, skills},} = user;
console.log(work); // SomeWork
console.log(skills); // [ 'html', 'css' ]
*/

// Деструктуризация массивов
/*
const colors = ['white', 'black', 'red'];
// const [w, b, red] = colors;
// console.log(w, b, red); // white black red

// const [w, b, red, green = 'green'] = colors;
// console.log(w, b, red, green); //white black red green

// можно пропустить переменные
const names = ['Denis', 'Ivan', 'Evgenii'];
// const [, name2, name3] = names;
// console.log(name2, name3); // Ivan Evgenii

const nestedArr = ['hello world', ['key', 'value']];
// const [, [key, value]] = nestedArr;
// console.log(key, value);// key value
*/

// Оператор Rest

const names = ['Denis', 'Ivan', 'Evgenii'];
const [name1, ...otherNames] = names;
console.log(name1, otherNames); // Denis [ 'Ivan', 'Evgenii' ]

// Оператор Spread