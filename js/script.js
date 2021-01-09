// lesson 1

// Текущий стандарт JS = ES6 (ECMA Script 2015)

/*
типы данных:

    1. Числа (int и Bigint)
    2. Строки (string)
    3. Объекты (object)
    4. Массивы (array)
    5. Специальные значения:
        - null (Обычно null используется для присвоения переменной «пустого» или «неизвестного» значения)
        - undefined (Обычно используется для проверок, была ли переменная назначена)
    6. Символы ???
 */

/*
Операции (некоторые):

< (меньше), <= (меньше или равно), > (больше), >= (больше или равно);
== (проверка на равенство), != (проверка на неравенство), === (проверка на идентичность), !== (проверка на неидентичность);
 */

/*
Переменные (let и const)
let - ключевое слово для объявления переменных (ES6)
const - ключевое слово для объявления констант (ES6)
var - устаревший способ объявления переменных (ES5)

let someVar;
console.log(someVar); ===> undefined

someVar = 15;
console.log(someVar); ===> 15
 */

/*
Ключевые слова

break       do            instanceof       typeof
case        else          new              var
catch       finally       return           void
continue    for           switch           while
debugger    function      this             with
default     if            throw
delete      in            try

 */

// 'use strict';
//
// console.dir({hoisted});
// hoisted = 5;
// console.dir({hoisted});
// var hoisted;

// let scalarVariable = 6;
// const scalarConstant = 7;
//
// const o = {scalarVariable, scalarConstant};
// console.dir(o);
//
// o.scalarVariable = 8;
// scalarVariable = 9;
// console.dir(o);