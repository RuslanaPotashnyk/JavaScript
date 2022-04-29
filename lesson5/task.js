// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let array = [1, 2, 3, 4, 5];
// let sum = 0;
// let medium = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     result = sum/arr.length;
//     return result;
// }
// console.log(medium(array));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function maxNumber(){
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const maxNumber of arguments) {
//         if (maxNumber > max) max = maxNumber;
//         if (maxNumber > min) max = maxNumber;
//     }
//     console.log(max);
//     return min;
// }
// let min = maxNumber(1, 2, 3, 4, 5);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let arrayRandom = (num) => {
//     let arrayOne = [];
//     for (let i = 0; i < num; i++) {
//         arrayOne.push(Math.floor(Math.random()*100));
//     }
//     console.log(arrayOne);
//     return arrayOne;
// };
// arrayRandom(20);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// let arrayRandom = (limit) => {
//     let arrayOne = [];
//     for (let i = 0; i < 20; i++) {
//         arrayOne.push(Math.floor(Math.random()*limit));
//     }
//     console.log(arrayOne);
//     return arrayOne;
// };
// arrayRandom(30);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// let revers = (arr) =>{
//     let ri =arr.length - 1;
//     let arrayRevers = [];
//     for (const arrElement of arr) {
//         arrayRevers[ri] = arrElement;
//         ri--;
//     }
//     console.log(arrayRevers);
// }
// revers([1,2,3]);

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let areaRectangle = (a,b) => { s = a * b; }
// areaRectangle(2, 3);
// console.log(s);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let areaCircle = (pi, r) => {
//     s = pi * Math.pow(r,2);
// }
// areaCircle(3.14, 10);
// console.log(s);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let areaCylinder = (pi, h, r) => {
//     s = 2 * pi * r * h;
// }
// areaCylinder(3.14, 10,20);
// console.log(s);

// - створити функцію яка приймає масив та виводить кожен його елемент

// let mas = (array) => {
//     for (const item of array){
//         console.log(item);
//     }
// }
// mas([1, 2, 3, 'perfect', 'and', 'great', true]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// paragraph('perfect and great');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let listCreation = (a) => {
//     document.write(`<ul>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<li>${a}</li>`);
//     document.write(`<ul>`);
// }
// listCreation('perfect and great');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let listCreationTwo = (a, b) => {
//     document.write(`<ul>`);
//     for (let i=0; i < b; i++){
//         document.write(`<li>${a}</li>`);
//     }
//     document.write(`<ul>`);
// }
// listCreationTwo('dont miss the moment', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let masTwo = (array) => {
//     document.write(`<ol>`);
//     for (let i=0; i < array.length; i++){
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`<ol>`);
// }
// masTwo([1, 2, 3, 'perfect', 'and', 'great', true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array = (arr) => {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
//     }
// }
// array([
//     { id: 1, name: 'Ruslana', age: 19},
//     { id: 2, name: 'Roman', age: 28},
//     { id: 3, name: 'Vitaliy', age: 20}
// ]);

// - створити функцію яка повертає найменьше число з масиву

