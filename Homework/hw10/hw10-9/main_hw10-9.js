// #bq1zkx7WP
// *** (подібне вже було, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100 грн"
// при перезавантаженні сторінки до значення додається по 10 грн, але !!! зміна ціни відбувається тільки на перезавантаження,
// які відбулись пізніше ніж 10 секунд після попереднього.
//  При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбувається


const priceElement = document.getElementById('price');

let price = Number(localStorage.getItem('price'));
let lastTime = Number(localStorage.getItem('lastTime'));

const currentTime = Date.now();

if (localStorage.getItem('price') === null) {
    price = 100;
} else if (currentTime - lastTime >= 10000) {
    price += 10;
}

priceElement.textContent = price + ' грн';

localStorage.setItem('price', price);
localStorage.setItem('lastTime', String(currentTime));
