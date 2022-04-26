// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let x = 'hello world';
let y = 'lorem ipsum';
let z = 'javascript is cool';
console.log(x.length);
console.log(y.length);
console.log(z.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log(x.toUpperCase());
console.log(y.toUpperCase());
console.log(z.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let xx = 'HELLO WORLD';
let yy = 'LOREM IPSUM';
let zz = 'JAVASCRIPT IS COOL';
console.log(xx.toLowerCase());
console.log(yy.toLowerCase());
console.log(zz.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str1 = 'Каждый охотник желает знать';
function stringToArray(str1) {
    console.log(str1.split(' '));
}
stringToArray(str1);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

function delete_characters(str, length) {
    console.log(str.slice(0, length));
}
delete_characters(str1, +prompt('Введіть число'));

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let str2 = "HTML JavaScript PHP";
function insert_dash(str) {
    console.log(str.toUpperCase().replaceAll(' ', '-'));
}
insert_dash(str2);
