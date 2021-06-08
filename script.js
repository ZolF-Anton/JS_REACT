'use strict';

//alert('Hello');
//const result = confirm('Are you sure?');
//console.log(result);
// const answer = +18prompt('Вам есть 18 лет?', 'ДА');
// console.log(typeof answer);

// const answers = [];
// answers[0] = prompt('What is your name', '');
// answers[1] = prompt('What is your second name', '');
// answers[2] = prompt('How old are you', '');

// document.write(answers);
//****************************** */

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = 'Ivan';
// alert(`Hello, ${user}`);

// let incr = 10,
//     decr = 10;

// incr++;
// decr--;
// console.log(incr++, --decr);
// console.log(5 % 2);
// console.log(2 + 2 * 4 !== 8);

// const isChecked = false,
//     isClosed = false;
// //   && - and
// //  ||  - or
// console.log(isChecked || !isClosed);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt('Последний из просмотренных фильмов', ''),
    b = prompt('Оцените его по 10 шкале', ''),
    c = prompt('Последний из просмотренных фильмов', ''),
    d = prompt('Оцените его по 10 шкале', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
