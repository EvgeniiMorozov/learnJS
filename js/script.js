'use strict';

// Задача 1

// iterate(object, callback)
// callback(key, value, object)

const obj = { a: 1, b: 2, c: 3, };

const callback = object => {
    for (const key in object) {
        let value = object[key];
        console.log('key:' + key, 'value:' + value);
    }
};
callback(obj);

// const iterate = (object, callback) => callback();
//
// iterate(obj, callback);
