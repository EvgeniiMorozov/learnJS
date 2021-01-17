# Learn JavaScript

---
### Домашнее задание №3

---

#### Задача 1. Итерирование циклами
Реализуйте функцию sum(...args), которая суммирует все свои аргументы, пятью разными способами. Примеры вызовов с результатами:
const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum() // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7
Цикл for
Цикл for..of
Цикл while
Цикл do..while
Метод Array.prototype.reduce()

#### Задача 2. Итерирование по двумерному массиву
6.  Найдите максимальный элемент в двумерном массиве
    const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    console.log(m); // 9
    Итерирование объектов-справочников
    При помощи цикла for..in перебрать объект-справочник с датами рождения и смерти людей и вернуть справочник с продолжительностью их жизни. Например:
    const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 },
    };
    console.log(ages(persons));
    // {
    //   lenin: 54,
    //   mao: 83,
    //   gandhi: 79,
    //   hirohito: 88,
    // }

#### Задача 3. Работа с массивами и использование методов Array
8.Реализуйте функцию removeElement(array, item) для удаления элемента item из массива array. Например:

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]
или
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array, 'Lima'); // удалит 'Lima' из массива
removeElement(array, 'Berlin'); // не удалит ничего
console.log(array);
// Результат: ['Kiev', 'Beijing', 'Saratov']

#### Задача 4. Улучшите функцию из предыдущего задания для удаления нескольких элементов из массива removeElements(array, item1, ... itemN).
Например:

const array = [1, 2, 3, 4, 5, 6, 7];
removeElements(array, 5, 1, 6);
console.log(array);
// Результат: [2, 3, 4, 7]

или

const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);
// Результат: ['Beijing', 'Saratov']

