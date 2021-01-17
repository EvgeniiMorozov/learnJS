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

// Области видимости. Контекст
/*
const cities = ['Athens', 'Roma', 'London', 'Beijing', 'Kiev', 'Riga'];
const f = s => s.length;
// функция объявлена при помощи function declaration. Внутренние cities и f будут перекрывать наружние.
function f1() {
    const cities = ['Athens', 'Roma'];
    const f = s => s.toUpperCase();
    console.dir({cities});
    console.dir(cities.map(f));
    {
        const f = s => s.toLowerCase();
        console.dir({cities});
        console.dir(cities.map(f));
    }

    {
        const cities = ['London', 'Roma', 'Kiev'];
        console.dir({cities});
        console.dir(cities.map(f));
    }
}
f1();

console.dir({cities});
console.dir(cities.map(f));

 */

// Значения по-умолчанию в функциях
/*
function fnNew(a, b = 'Hello', c = 5) {
    console.dir({a, b, c});
}

fnNew(1, 2, 3);
fnNew(1, 2);
fnNew(1);
fnNew();
// { a: 1, b: 2, c: 3 }
// { a: 1, b: 2, c: 5 }
// { a: 1, b: 'Hello', c: 5 }
// { a: undefined, b: 'Hello', c: 5 }

//
function fnOld(a, b, c) {
    b = b || 'Hello';
    c = c || 5;
    console.dir({a, b, c});
}
*/

// Атрибуты функции
/*
function inc(a) {
    return ++a;
}
const sum = function (a, b) {
    return a + b;
}

const max = (a, b) => (a > b ? a : b);

// функция имеет атрибут length, который говорит о количестве аргументов, которые она ожидает получить

console.log('Names:');
console.dir({
    inc: inc.name, // считывание имени функции
    sum: sum.name,
    max: sum.name,
});
console.dir({
    inc: inc.length, // 1
    sum: sum.length, // 2
    max: sum.length, // 2
});

console.log('Anonymous function:' + function(x) {
    return x;
}.name);

console.log('toString');
console.dir({
    inc: inc.toString(),
    sum: sum.toString(),
    max: sum.toString(),
});
*/

/*
// Функции внутри объектов
const powName = 'pow';
const obj1 = {
    fn1: function inc(a) {
        return ++a;
    },
    sum: function(a, b) {
        return a + b;
    },
    // задали имя функции, т.е. и имя inc и значение ключа будет inc
    inc(a) {
        return ++a;
    },
    // лямбда, которая объявлена при помощи стрелочной функции с блоком операторов
    max: (a, b) => {
        return a > b ? a : b;
    },
    // лямбда с выражением
    min: (a, b) => (a < b ? a : b),
    dec: a => --a,
    [powName](a, b) {
        return Math.pow(a, b);
    },
};
console.log('obj1.fn1.name = ' + obj1.fn1.name);
console.log('obj1.sum.name = ' + obj1.sum.name);
console.log('obj1.inc.name = ' + obj1.inc.name);
console.log('obj1.max.name = ' + obj1.max.name);
console.log('obj1.min.name = ' + obj1.min.name);
console.log('obj1.dec.name = ' + obj1.dec.name);
*/
