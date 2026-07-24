// #dYQNrBV
// Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let greeting = 'hello';
console.log(greeting);

let companyName = 'owu';
console.log(companyName);

let domain = 'com';
console.log(domain);

let country = 'ua';
console.log(country);

let n1 = 1;
console.log(n1);

let n2 = 10;
console.log(n2);

let n3 = -999;
console.log(n3);

let n4 = 123;
console.log(n4);

const PI = 3.14;
console.log(PI);

let n5 = 2.7;
console.log(n5);

let n6 = 16;
console.log(n6);

let b1 = true;
console.log(b1);

let b2 = false;
console.log(b2);



// #6Qb97gsv
// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)

let firstName = 'Oksana';
let middleName = 'Vadimovna';
let lastName = 'Aleksandrova';
// let person = firstName +' '+ middleName +' '+ lastName;
let person = `${firstName} ${middleName} ${lastName}`;

console.log(person);



// #4N0y5tufA
// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = ‘100’; let c = true;
let a = 100;
let b = '100';
let c = true;

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);




// #ruUtWDUI
// Додаткове для тих, хто цікавився prompt`oм
// За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль
let firstName2 = prompt("Введіть ім'я");
let middleName2 = prompt("Введіть по батькові");
let age2 = prompt("Введіть вік");

console.log(firstName2);
console.log(middleName2);
console.log(age2);
