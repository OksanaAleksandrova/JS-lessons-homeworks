// #bolvdlhP
//
// описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
// Після опису, використовуючи функції масивів:
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// Приклад моделі об'єкту карти:
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

// const deck = [
//     { cardSuit: "spade", value: "6", color: "black" },
//     { cardSuit: "spade", value: "7", color: "black" },
//     { cardSuit: "spade", value: "8", color: "black" },
//     { cardSuit: "spade", value: "9", color: "black" },
//     { cardSuit: "spade", value: "10", color: "black" },
//     { cardSuit: "spade", value: "jack", color: "black" },
//     { cardSuit: "spade", value: "queen", color: "black" },
//     { cardSuit: "spade", value: "king", color: "black" },
//     { cardSuit: "spade", value: "ace", color: "black" },
//
//     { cardSuit: "diamond", value: "6", color: "red" },
//     { cardSuit: "diamond", value: "7", color: "red" },
//     { cardSuit: "diamond", value: "8", color: "red" },
//     { cardSuit: "diamond", value: "9", color: "red" },
//     { cardSuit: "diamond", value: "10", color: "red" },
//     { cardSuit: "diamond", value: "jack", color: "red" },
//     { cardSuit: "diamond", value: "queen", color: "red" },
//     { cardSuit: "diamond", value: "king", color: "red" },
//     { cardSuit: "diamond", value: "ace", color: "red" },
//
//     { cardSuit: "heart", value: "6", color: "red" },
//     { cardSuit: "heart", value: "7", color: "red" },
//     { cardSuit: "heart", value: "8", color: "red" },
//     { cardSuit: "heart", value: "9", color: "red" },
//     { cardSuit: "heart", value: "10", color: "red" },
//     { cardSuit: "heart", value: "jack", color: "red" },
//     { cardSuit: "heart", value: "queen", color: "red" },
//     { cardSuit: "heart", value: "king", color: "red" },
//     { cardSuit: "heart", value: "ace", color: "red" },
//
//     { cardSuit: "clubs", value: "6", color: "black" },
//     { cardSuit: "clubs", value: "7", color: "black" },
//     { cardSuit: "clubs", value: "8", color: "black" },
//     { cardSuit: "clubs", value: "9", color: "black" },
//     { cardSuit: "clubs", value: "10", color: "black" },
//     { cardSuit: "clubs", value: "jack", color: "black" },
//     { cardSuit: "clubs", value: "queen", color: "black" },
//     { cardSuit: "clubs", value: "king", color: "black" },
//     { cardSuit: "clubs", value: "ace", color: "black" },
// ];

const deck = [];

const suits = ['spade', 'diamond', 'heart', 'clubs'];

const values = [
    '6', '7', '8', '9', '10',
    'jack', 'queen', 'king', 'ace'
];

for (const suit of suits) {
    for (const value of values) {

        let color;
        if (suit === 'diamond' || suit === 'heart') {
            color = 'red';
        } else {
            color = 'black';
        }

        deck.push({
            cardSuit: suit,
            value: value,
            color: color
        });
    }
}

console.log(deck);
console.log(deck.length);


// - знайти піковий туз

const aceOfSpades = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(aceOfSpades);


// - всі шістки

const allSixes = deck.filter(card => card.value === '6');
console.log(allSixes);


// - всі червоні карти

const allRed = deck.filter(card => card.color === 'red');
console.log(allRed);

// - всі буби

const allDiamonds = deck.filter(card => card.cardSuit === 'diamond');
console.log(allDiamonds);

// - всі трефи від 9 та більше

const highClubs = deck.filter(card =>
    card.cardSuit === "clubs" &&
    values.indexOf(card.value) >= values.indexOf("9")
);
console.log(highClubs);


// #EP5I1UUzAX
//
// Взяти описану колоду карт, та за допомогою reduce "упакувати" всі карти по "мастях" в об'єкт
//
// Приклад моделі кінцевого об'єкту
//
// {
//
//     spades:[],
//
//     diamonds:[],
//
//     hearts:[],
//
//     clubs:[]
//
// }

const deckReduce = deck.reduce((accumulator, card) => {
    if (card.cardSuit === 'spade') {
        accumulator.spades.push(card)
    } else if (card.cardSuit === 'diamond') {
        accumulator.diamonds.push(card)
    } else if (card.cardSuit === 'heart') {
        accumulator.hearts.push(card)
    } else if (card.cardSuit === 'clubs') {
        accumulator.clubs.push(card)
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []});

console.log(deckReduce);
