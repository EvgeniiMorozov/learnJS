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
/*
const Array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const maxValue = array => {
    let newArray = [];
    for (let i = 0; i <= array.length - 1; i++) {
        newArray = newArray.concat(array[i]);
    }
    return Math.max(...newArray);
};
console.log(maxValue(Array));
*/

// Задача 3

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
};

// Ниже оставил комментарии, чтоб дать понять ход мысли

// с помощью метода Object.keys() получим массив ключей объекта persons.
// const personsList = Object.keys(persons);
// console.log(persons[personsList[1]]); // { born: 1893, died: 1976 }
// console.log(persons[personsList[1]].died - persons[personsList[1]].born);
// 83

const ages = persons => {
// с помощью метода Object.keys() получим массив ключей объекта persons.
    const personsList = Object.keys(persons);
/*
 Создаем новый объект years, и с помощью итерации заполняем его.
 Обращаемся к вложенным объектам исходного объекта persons через элементы
 массива ключей personsList.
*/
    let years = {};
    for (let i = 0; i <= personsList.length - 1; i++) {
        years[personsList[i]] = persons[personsList[i]].died - persons[personsList[i]].born;
    }
    return years;
};

console.log(ages(persons));
// { lenin: 54, mao: 83, gandhi: 79, hirohito: 88 }

// Задача 4
/*
const numArray = [1, 2, 3, 4, 5, 6, 7];
const strArray = ['Kiev', 'Beijing', 'Lima', 'Saratov'];

const removeElement = (arr, item) => {

// Необходимо делать проверку на наличие удаляемого элемента в массиве.
// Без неё, при отсутсвующем элементе, удаляется последний элемент массива.
// Необъяснимо, но факт !!! :)

    if (arr.find(el => el === item)) {
        arr.splice(arr.findIndex(el => el === item), 1);
        console.log(arr);
    }
    return arr;
};

removeElement(numArray, 5); // [ 1, 2, 3, 4, 6, 7 ]
removeElement(numArray, 157); // Элемент отсутствует!
removeElement(strArray, 'Lima'); // [ 'Kiev', 'Beijing', 'Saratov' ]
removeElement(strArray, 'Rostov'); // Элемент отсутствует!

const removeElements = (arr, ...items) => {
    for (let i = 0; i <= items.length; i++ ) {
        removeElement(arr, items[i]);
    }
};

removeElements(numArray, 5, 33, 12, 4); // [ 1, 2, 3, 6, 7 ]
removeElements(numArray, 5, 3, 2, 4, 8, 10); // [ 1, 6, 7 ]
removeElements(strArray, 'Lima', 'Berlin', 'Kiev'); // [ 'Beijing', 'Saratov' ]
*/
