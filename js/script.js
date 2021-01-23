'use strict';

// This
/*
const Context = function () {
    this.name = 'Marcus';
    const city = {
        name: 'Kiev',
        year: 482,
        f1: function () {
            return this.name;
        },
        f2: () => {
            return this.name;
        },
        f3 () {
            return this.name;
        },
    };
    return city;
};

const city = new Context();
console.log('city.f1() = ' + city.f1());
console.log('city.f2() = ' + city.f2());
console.log('city.f3() = ' + city.f3());
// city.f1() = Kiev
// city.f2() = Marcus
// city.f3() = Kiev
*/

// Контекст
/*
const hash = () => {
    const data = {};
    let counter = 0;
    return (key, value) => {
        data[key] = value;
        counter++;
        console.dir({ counter });
        return data;
    };
};

const h1 = hash();
h1('name', 'Marcus');
h1('city', 'Roma');

const obj1 = h1('born', 121);
console.dir({ obj1 });
// { counter: 1 }
// { counter: 2 }
// { counter: 3 }
// { obj1: { name: 'Marcus', city: 'Roma', born: 121 } }
*/

// Ошибки
/*
// STACK TRACE

    at Object.<anonymous> (C:\apps\js\learnJS\js\script.js:66:1)
←[90m    at Module._compile (internal/modules/cjs/loader.js:1063:30)←[39m
←[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)←[39m
←[90m    at Module.load (internal/modules/cjs/loader.js:928:32)←[39m
←[90m    at Function.Module._load (internal/modules/cjs/loader.js:769:14)←[39m
←[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)←[39m
←[90m    at internal/main/run_main_module.js:17:47←[39m

// ^^^ stack trace - строки кода, которые идут после указания ошибки
//Последовательность вызовов функций, которая привела к ошибке.

*/

/*
// 1. Синтаксические ошибки
const cube = num => {
    return num * num * num;
}); //SyntaxError: Unexpected token ')'
*/
/*
// 2. Reference errors
ads(12); // ReferenceError: ads is not defined
*/
/*
// 3. Type errors
const length = 12;
const num = length(54);
// TypeError: length is not a function
*/
/*
// 4. Логические ошибки
// Конвертация градусов по фаренгейту в градусы по цельсию
// (50 - 32) * 5.9 = 10
const fahrToCelsius = (fahr) => {
    return fahr - 32 * 5 / 9;
};
console.log(fahrToCelsius(50));
 */

// Тесты
/*
const func = () => {
    const a = 120;
    return 10 * a * b;
};
// Ref error
 */
