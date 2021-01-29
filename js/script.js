'use strict';

// AJAX. POST запросы.

// функция для GET запроса
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

const btn = document.querySelector('.btn-get-posts');
const btnAddPost = document.querySelector('.btn-add-post');
const container = document.querySelector('.container');

/*
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
        card.appendChild(cardBody);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}
*/

// создадим функцию для POST запроса
function createPost(body, cb) {
    // body - тело запроса
    // cb - callback
    const xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://jsonplaceholder.typicode.com/posts');

    xhr.addEventListener('load', () => {
        console.log('request loaded');
        const response = JSON.parse(xhr.responseText);
        cb(response);
    });

    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8',);

    xhr.addEventListener('error', () => {
        console.log('error');
    });

    xhr.send(JSON.stringify(body));
}


btn.addEventListener('click', e => {
    getPosts(renderPosts);
});

btnAddPost.addEventListener('click', e =>{
    const newPost = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    };
    createPost(newPost, function (response) {
        const card = cardTemplate(response);
        container.insertAdjacentElement('afterbegin', card);
        // добавляем карточку вверх
    });
});

// добавим пост на страницу

// шаблон для создания карточки вынесем в отдельную функцию
function cardTemplate(post) {
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
    card.appendChild(cardBody);

    return card;
}

function renderPosts(response) {
    const fragment = document.createDocumentFragment(); // фрагмент
    response.forEach(post => {
        const card = cardTemplate(post);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}