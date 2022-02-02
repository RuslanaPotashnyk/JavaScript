// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let wordOne = 'hello';
let wordTwo = 'owu';
let wordThree = 'com';
let wordFour = 'ua';
let numberOne = 1;
let numberTwo = 10;
let numberThree = -999;
let numberFour = 123;
let numberFive = 3.14;
let numberSix = 2.7;
let numberSeven = 16;
let xxx = true;
let yyy = false;
console.log(wordOne);
alert(wordOne);
document.write(wordOne);
console.log(wordTwo);
alert(wordTwo);
document.write(wordTwo);
console.log(wordThree);
alert(wordThree);
document.write(wordThree);
console.log(wordFour);
alert(wordFour);
document.write(wordFour);
console.log(numberOne);
alert(numberOne);
document.write(numberOne);
console.log(numberTwo);
alert(numberTwo);
document.write(numberTwo);
console.log(numberThree);
alert(numberThree);
document.write(numberThree);
console.log(numberFour);
alert(numberFour);
document.write(numberFour);
console.log(numberFive);
alert(numberFive);
document.write(numberFive);
console.log(numberSix);
alert(numberSix);
document.write(numberSix);
console.log(numberSeven);
alert(numberSeven);
document.write(numberSeven);
console.log(xxx );
alert(xxx);
document.write(xxx);
console.log(yyy);
alert(yyy);
document.write(yyy);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

wordOne = 'Hi';
wordTwo = 'I';
wordThree = 'am';
wordFour = 'Ruslana';
numberOne = 0;
numberTwo = 1;
numberThree = 2;
numberFour = 3;
numberFive = 4;
numberSix = 5;
numberSeven = 6;
xxx = false;
yyy = true;
console.log(wordOne);
alert(wordOne);
document.write(wordOne);
console.log(wordTwo);
alert(wordTwo);
document.write(wordTwo);
console.log(wordThree);
alert(wordThree);
document.write(wordThree);
console.log(wordFour);
alert(wordFour);
document.write(wordFour);
console.log(numberOne);
alert(numberOne);
document.write(numberOne);
console.log(numberTwo);
alert(numberTwo);
document.write(numberTwo);
console.log(numberThree);
alert(numberThree);
document.write(numberThree);
console.log(numberFour);
alert(numberFour);
document.write(numberFour);
console.log(numberFive);
alert(numberFive);
document.write(numberFive);
console.log(numberSix);
alert(numberSix);
document.write(numberSix);
console.log(numberSeven);
alert(numberSeven);
document.write(numberSeven);
console.log(xxx );
alert(xxx);
document.write(xxx);
console.log(yyy);
alert(yyy);
document.write(yyy);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

let firstName = 'Ruslana';
let middleName = 'Ruslanivna';
let lastName = 'Potashnyk';
let person = [firstName, middleName, lastName];

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

firstName = prompt('Як тебе звати?');
middleName = prompt('По-Батькові?');
age = prompt('Скільки тобі років?');
alert(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!

console.log(5 < 6) // 5 ? 6 -> true
console.log(5 > 6) // 5 ? 6 -> false
console.log(5 >= 6) // 5 ? 6 -> false
console.log(5 === 6) // 5 ? 6 -> false
console.log(10 === 10) // 10 ? 10 -> true
console.log(10 >= 10) // 10 ? 10 -> true
console.log(10 !== 10) // 10 ? 10 -> false
console.log(10 > 10) // 10 ? 10 -> false
console.log(10 < 10) // 10 ? 10 -> false
console.log(123 === '123') // 123 ? '123' -> false
console.log(123 !== '123') // 123 ? '123' -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?

let str = "20";
a = 5;
document.write(str + a + "<br/>"); // 205, тому що при додаванні стрінгові дані просто приєднюються
document.write(str - a + "<br/>"); // 15, віднімання допускається між стрінговим і числовим типами зміних
document.write(str * "2" + "<br/>"); //40, множення допускається між стрінговими типами зміних
document.write(str / 2 + "<br/>"); //10, ділення допускається між стрінговим і числовим типами зміних