function createCalcFunction(n) {
    return function () {
        console.log(1000 * n);
    };
}

const calc = createCalcFunction(42);
console.log(calc);
calc();
//****************************************** */
function createIncr(n1) {
    return function (num) {
        return n1 + num;
    };
}

const addOne = createIncr(1);
const addTen = createIncr(10);

console.log(addOne(10));
console.log(addOne(43));

console.log(addTen(10));
//****************************** */

function urlGen(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    };
}

const comUrl = urlGen('com');
console.log(comUrl('google'));
console.log(comUrl('yandex'));

//************************************************************ */

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }
// const person1 = { name: 'Mikhael', age: 22, job: 'Frontend' };
// const person2 = { name: 'Frea', age: 21, job: 'SMM' };

// bind(person1, logPerson);
// bind(person2, logPerson);

function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args);
    };
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}
const person1 = { name: 'Mikhael', age: 22, job: 'Frontend' };
const person2 = { name: 'Frea', age: 21, job: 'SMM' };

bind(person1, logPerson)();
bind(person2, logPerson)();

('use strict');

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

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); // + в начале перевод string в number
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// };

// const a = prompt('Последний из просмотренных фильмов', ''),
//     b = prompt('Оцените его по 10 шкале', ''),
//     c = prompt('Последний из просмотренных фильмов', ''),
//     d = prompt('Оцените его по 10 шкале', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

const str = 'test';
const arr = [1, 2, 4, 5, 7, 8, 9];
console.log(str.length);
console.log(arr.length);
console.log(str[2].toUpperCase());

console.log(str.toUpperCase());
console.log(str);

const fruit = 'Some fruit';
console.log(fruit.indexOf('q'));

const logg = 'Hello world';
console.log(logg.slice(-11, -2));
console.log(logg.substring(6, 11));
console.log(logg.substr(6, 5));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));

function t1() {
    let a = 0;
    return function () {
        a = a + 1;
        return a;
    };
}

let b = t1();
let c = t1();
a = 77;
console.log(b());
console.log(c());
console.log(b());
console.log(c());
console.log(b());
a = 777;
console.log(b());
console.log(c());
console.log(c());
