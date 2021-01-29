'use strict';

// Введение в AJAX
/*
AJAX - это технология, которая подразумевает общение с сервером и дальнейшее
 изменение страницы, без её перезагрузки.
 */

// xml-http-request
// http://jsonplaceholder.typicode.com/

/*
const xhr = new XMLHttpRequest();

//console.log(xhr); //ReferenceError: XMLHttpRequest is not defined

// формирование запроса (метод open не отправляет запрос)
xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts');

// GET - получение данных с сервера
// POST - отправка данных на сервер
// PUT - для обновления данных на сервере
// DELETE - удаление данных на сервере

// подписка на событие загрузки и получения данных от сервера
xhr.addEventListener('load', () => {
    console.log('request loaded');
    // свойство xhr.responseText - ответ от сервера (JSON-массив объектов)
    console.log(xhr.responseText);
});

//отправка запроса (метод send)
xhr.send();
// если попытаться получить ответ от сервера сразу после отправки запроса
// то ничего не произойдёт т.к. запросы асинхронные

// можно обрабатывать ошибки, подписавшись на событие error
xhr.addEventListener('error', () => {
    console.log('error');
});
*/

function getPosts(cb) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts');

    xhr.addEventListener('load', () => {
        console.log('request loaded');
        const response = JSON.parse(xhr.responseText);
        console.log(response);
        cb(response); // callback, чтобы получить ответ от сервера вне нашей
        // функции
    });

    xhr.addEventListener('error', () => {
        console.log('error');
    });

    xhr.send();
}

// getPosts((response) => {
//     console.log(response);
// });

const btn = document.querySelector('button');
const container = document.querySelector('.container');

// btn.addEventListener('click', (event) => {
//     getPosts((response) => {
//         console.log(response);
//     });
// });

// теперь обработаем запрос

// btn.addEventListener('click', e => {
//     getPosts((response) => {
//         const fragment = document.createDocumentFragment(); // фрагмент
//         response.forEach(post => {
//             const card = document.createElement('div'); // создаём карточку
//             card.classList.add('card');
//             const cardBody = document.createElement('div');
//             cardBody.classList.add('card-body');
//             const title = document.createElement('h5');
//             title.classList.add('card-title');
//             title.textContent = post.title;
//             const article = document.createElement('p');
//             article.classList.add('card-text');
//             article.textContent = post.body;
//             cardBody.appendChild(title);
//             cardBody.appendChild(article);
//             // console.log(cardBody);
//             card.appendChild(cardBody);
//             fragment.appendChild(card);
//         });
//         container.appendChild(fragment);
//     });
// });

// оптимизируем код, функцию внутри getPosts вынесем отдельно

function renderPosts(response) {
    const fragment = document.createDocumentFragment(); // фрагмент
    response.forEach(post => {
        const card = document.createElement('div'); // создаём карточку
        card.classList.add('card');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = post.title;
        const article = document.createElement('p');
        article.classList.add('card-text');
        article.textContent = post.body;
        cardBody.appendChild(title);
        cardBody.appendChild(article);
        // console.log(cardBody);
        card.appendChild(cardBody);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}

btn.addEventListener('click', e => {
    getPosts(renderPosts);
});

/*
ИТОГО:

Для того, чтобы сделать запрос, нам надо создать экземпляр xml-http-request,
 под названием xhr обычно.
 Открыть запрос и настроить, куда и как мы хотим сделать запрос.
 Повесить обработчик события о загрузке, внутри мы парсим responseText и
  дальше мы его отправляем куда-то (чтоб он вывелся или над ним провели
   манипуляции)
И делаем xhr.send() для отправки самого запроса.
 */