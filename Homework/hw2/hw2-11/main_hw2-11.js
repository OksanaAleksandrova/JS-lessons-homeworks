// #iBvqtjEm
// – є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null і т.д включно). Напишіть код, який
// буде присвоювати змінній х значення “default”, якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і т.д).

// let x = 0;
// if (x === '' || x === 0 || x === undefined || x === null || x === NaN) {
//     console.log('default')
// }

let x;
if (!x) {
    console.log('default')
}
