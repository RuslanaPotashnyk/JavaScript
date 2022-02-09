// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle (a,b) {
    let s = a * b;
    console.log(s);
    return s;
}

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle (r) {
    let pi = 3.14;
    let s = pi * Math.pow(r,2);
    console.log(s);
    return s;
}

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function areaCylinder (h,r) {
    let pi = 3.14;
    let s = 2 * pi * r * h;
    console.log(s);
    return s;
}

// - створити функцію яка приймає масив та виводить кожен його елемент

let arr = [1, 2, 3, 'perfect', 'and', 'great', true]
function mas (array) {
    for (const item of array){
        console.log(item);
    }
}
mas(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraph(text) {
    document.write(`<p>${text}</p>`);
}
paragraph('perfect and great');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listCreation(a){
    document.write(`<ul>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`<li>${a}</li>`);
    document.write(`<ul>`);
}
listCreation('perfect and great');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function listCreationTwo(a, b){
    document.write(`<ul>`);
    for (let i=0; i < b; i++){
        document.write(`<li>${a}</li>`);
    }
    document.write(`<ul>`);
}
listCreationTwo('dont miss the moment', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function masTwo(array) {
    document.write(`<ol>`);
    for (let i=0; i < array.length; i++){
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`<ol>`);
}
masTwo(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let mass = [
    { id: 1, name: 'Ruslana', age: 19},
    { id: 2, name: 'Roman', age: 28},
    { id: 3, name: 'Vitaliy', age: 20}
];
function array(arr){
    for (const arrElement of arr) {
        document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`);
    }
}
array(mass)