// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.

let masOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(masOne);
const result = (previousValue, currentValue) => previousValue + currentValue;
console.log(masOne.reduce(result));

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let bookOne = {
    title: 'Граф Монте-Крісто',
    page: 1504,
    genre: 'Роман'
}

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let bookTwo = {
    title: '1984',
    page: 320,
    genre: 'Наукова фантастика',
    author: 'Джордж Орвелл'
}

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт

let book = [{bookOne},{bookTwo}];
console.log(book[0]);
console.log(book[1]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 25;
let width = 10;
let s = height * width;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let pi = 3.141592;
let r = dC/2;
let v = pi * Math.pow(r,2) * heightC;
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k2 = Math.pow(n,2) + Math.pow(m,2);
let k = Math.sqrt(k2);
console.log(k);