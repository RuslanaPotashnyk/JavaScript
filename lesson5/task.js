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
