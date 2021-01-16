'use strict';

// Object
/*
// Первый способ объявления
const person1 = {};
person1.name = 'Marcus';
person1.city = 'Roma';
person1.born = 121;

// Второй способ объявления
const person2 = new Object(); //создание пустого объекта
person2.name = 'Marcus';
person2.city = 'Roma';
person2.born = 121;

// Третий способ объявления
const person3 = {
    name: 'Marcus',
    city: 'Roma',
    born: 121,
};
console.dir({person1, person2, person3});
*/
/*
// Object access
const person = {};
person.name = 'Marcus';
person.city = 'Roma';
person.born = 121;

console.log('Person name is: ' + person.name);
console.log('Person name is: ' + person['name']);

delete person.name;
console.dir({person});

delete person['city'];
console.dir({person});
*/
/*
//Объявление через геттер и сеттер
const person2 = {
    name: 'Marcus Aurelius',
    get city () {
        return 'Roma';
    },
    set city (value) {
        console.log('Marcus remains in Roma');
    },
};

person2.city = 'Kiev';

console.dir({person2});
 */
/*
// Properties
const person = {
    name: 'Marcus',
    city: 'Roma',
    born: 121,
};

if('name' in person) {
    console.log('Person name is: ' + person.name);
}

// проходимся по всем ключам объекта person
for (const key in person) {
    const value = person[key];
    console.dir({key, value});
}
*/
/*
// Переменные в хэше
const name = 'Marcus Aurelius';
const city = 'Roma';
{
    const person = {name, city}; // объединение ключей и значений
    console.dir({person});
}
 */
/*
// Dynamic field name
{
    const fieldName = 'city';
    const fieldValue = 'Roma';
    const person = {
        name: 'Marcus Aurelius',
    [fieldName]: fieldValue,
    };
    console.dir({person});
}
*/
/*
// Вложенные методы объектов
const prefix = 'city';
const person = {
    name: 'Marcus Aurelius',
    [prefix + 'Born']: 'Roma',
};
console.dir({person});

// function in fild name
{
    const fn = s => s + 'Born';
    const person = {
        name: 'Marcus Aurelius',
        [fn('city')]: 'Roma',
    };
}
console.dir({person});
*/

// Array
/*
const letters = [];
letters.push('B');
console.dir({letters});
letters.unshift('A');
console.dir({letters});
letters.push('C');
console.dir({letters});

const numbers = [1, 2, 3];
numbers.push(4);
console.dir({numbers});

const languages = ['C++', 'JS', 'Python', 'Haskell', 'Swift'];
console.dir({
    length: languages.length,
    'languages[0]': languages[0],
    'languages[languages.length - 1]': languages[languages.length - 1]
});
 */

// Сериализация
/*
//Преобразование объекта и массива в строку
const person = {
    name: 'Marcus',
    city: 'Roma',
    born: 121,
};
const s = JSON.stringify(person);
console.log(s);

const obj = JSON.parse(s);
console.dir({obj});
 */
/*
const letters = ['A', 'B', 'C', 'D'];
console.log(letters + '');// к массиву добавили пустую строчку для приобразования массива в строку
//A,B,C,D <<<string

console.log(JSON.stringify(letters));

console.log(letters.join('---'));

console.log(letters.join('---').split(''));

*/
