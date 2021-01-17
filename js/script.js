'use strict';
// Итерирование, циклы
/*
// цикл for
console.log('Example 1');

for (let i = 0; i < 3; i++) {
    console.log(i);
}

// иные варианты написания цикла for
console.log('Example 2');
{
    let i = 0;
    for (; i < 3; i++) {
        console.log(i);
    }
}

console.log('Example 3');
{
    for(let i = 0; i < 3;) {
        console.log(i++);
    }
}
*/
/*
// цикл while
console.log('Example 2 - while');
let a = 0;
// while - цикл с предусловием
while (a < 10) {
    console.log(a++);
}
*/
/*
// do-while - цикл с постусловием
console.log('Example 3 do-while');
let i = 0;
do {
    console.log(i++);
} while(i < 10);
*/
/*
// for-in objects
const hash = {
    first: 7,
    second: 10,
    third: 1,
    fourth: 5,
};
hash.fifth = 2;
console.log(hash);
// { first: 7, second: 10, third: 1, fourth: 5, fifth: 2 }

for(const key in hash) {
    // данный цикл позволяет итерироваться по ключам объекта (коллекциям)
    const value = hash[key];
    console.log(
        key, '\t', typeof key, '\t',
        value, '\t', typeof value, '\t'
    );
}
*/
/*
// for-in array Перебор по ключам
const numbers = [7, 10, 1, 5, 2];
numbers.field2 = 'Value2'; // присваиваем поле, которое будет иметь строчный ключ field2
numbers[-10] = 'Value3';
numbers.field1 = 'Value1';
numbers[5] = 20;

for (const i in numbers) {
    const value = numbers[i];
    console.log(i, typeof i, value, typeof value);
}
 */
/*
// for-of array (перебор делается не по ключам, а по его значениям)
const numbers = [7, 10, 1, 5, 2];
numbers.field2 = 'Value2'; // присваиваем поле, которое будет иметь строчный ключ field2
numbers[-10] = 'Value3';
numbers.field1 = 'Value1';
numbers[5] = 20;

for (const i of numbers) {
    const value = numbers[i];
    console.log(i, typeof i, value);
}
// 7 number undefined
// 10 number undefined
// 1 number 10
// 5 number 20
// 2 number 1
// 20 number undefined
*/

/*
// Задачка
// Реализуйте функцию squareOfSum(), которая принимает на вход 2 числа и возвращает квадрат суммы этих чисел
//Для вычисления значения используйте форму из курса алгебры
// (a + b)2 = a2 + 2ab + b2

const squareOfSum = (x, y) => ((x * x) + (2 * x * y) + (y * y));

console.log(squareOfSum(1, 10));
 */

/*
// Break - оператор
const flag = false;

// Делаем вложенные блоки кода. Блоки кода можно именовать, как label.
label1: {
    console.log(1);
    label2: {
        console.log(2);
        break label1; // выйдем из блока кода, который проименован как label1.
        console.log(3);
    }
    console.log(4);
}
console.log(5);
// 1
// 2
// 5
// Также важно помнить, что break ставится и внутри for in, for of, for.
 */
/*
// Continue
// Данный оператор позволяет начать этот цикл сначала.
let i = 0; // итерируемся по переменной i, начиная с нуля
while (i < 10) {
    i++; // увеличиваем i
    console.log('Hello', i);
    if(i === 5) continue; // но когда i === 5
    console.log('World'); // эта строчка печататься не будет
}
// Hello 1
// World
// Hello 2
// World
// Hello 3
// World
// Hello 4
// World
// Hello 5
// Hello 6
// World
// Hello 7
// World
// Hello 8
// World
// Hello 9
// World
// Hello 10
// World

 */
/*
// Цикл forEach

// первый способ
const numbers = [7, 10, 1, 5, 2];
// первый аргумент - элемент массива
// второй аргумент - порядковый номер
// третий аргумент- массив
numbers.forEach((item, i, arr) =>{
    console.log(i, arr, item)
});

// второй способ
[7, 10, 1].forEach(x => {
    console.log(x)
});
// то же самое короче
[7, 10, 1].forEach(x => console.log(x));

const log = x => console.log(x); // проименовали функцию
[7, 10, 1].forEach(log);

 */

/*
// Тест
const func = () => {
    const a = 120.323;
    return 10 * a * b;
};
// не задана переменная b

console.log(sum(5, 10)); // ошибка, функция sum не определена

(12 > 40) || (400 >= 400) // true

const testStore = 10;
const result = testStore < 10 ? 'bad' : 'good';

const getColor = (color) => {
    if (color === 'white') {
        return 'white';
    } else {
        return 'black'
    };
};

const getColor = color => (color === 'white' ? 'white' : 'black');

const isEven = num => num % 2 === 0;
const increaseNum = num => num + 10;
const num = 6;
const result = isEven(increaseNum(num) + 1) ? num + 1 : 1 - num;

console.log(result); // -5

const isRightNum = num => (num > 10 && num <= 5) || (num / 7 === 1); // 7 - true

const name = 'JavaScript';
const version = '5';
const result = `${name[0]} - ${name}, ${version}`;
console.log(result);
// J - JavaScript, 5

const str = 'Danger';
const letter = str[str.length / 2];
console.log(letter);
// g

const str = 'qwertyuiop';
const result = `${str[2]}${str[4]}${str[0]}`;
console.log(result);
// etq

let x = 45;
let height = x++;
x = --height; // 44

let b = 10;
b += b ** 2 > 20 ? 1 : 10;
console.log(b);
// 11

let a = 4;
a -= 8 - a;
*/

/*
Реализуйте функцию finalGrade(), которая вычисляет итоговую оценку студента на основе двух параметров: оценки за экзамен и количества законченных проектов.

Функция принимает два аргумента:

exam — оценка за экзамен, число от 0 до 100;
projects — количество проектов, число от 0 и выше.
Функция возвращает: число (итоговую оценку).

Есть четыре возможных итоговых оценки:

100, если оценка за экзамен выше 90 или есть больше 10 проектов
90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
0 в любом другом случае
Вот как должна работать ваша функция:

пример вызова         // что должна вернуть функция при таком вызове
finalGrade(100, 12);  // 100
finalGrade(99, 0);    // 100
finalGrade(10, 15);   // 100

finalGrade(85, 5);    // 90

finalGrade(55, 3);    // 75

finalGrade(55, 0);    // 0
finalGrade(20, 2);    // 0

// Решение:
const finalGrade = (exam, projects) => {
    if (exam > 90 && projects > 10) {
        console.log('Оценка 100 баллов');
    } else if (exam > 75 && projects >= 5) {
        console.log('Оценка 90 баллов');
    } else if (exam > 50 && projects >= 2) {
        console.log('Оценка 90 баллов');
    }
    return;
};
console.log(finalGrade(85, 5));
*/
