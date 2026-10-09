// #zg6Fifnqig
// – створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

const cinderellas = [
    new Cinderella('Ella', 19, 37),
    new Cinderella('Alice', 21, 38),
    new Cinderella('Emma', 18, 36),
    new Cinderella('Olivia', 22, 39),
    new Cinderella('Sophia', 20, 35),
    new Cinderella('Isabella', 23, 40),
    new Cinderella('Mia', 17, 36.5),
    new Cinderella('Charlotte', 24, 38.5),
    new Cinderella('Amelia', 19, 41),
    new Cinderella('Grace', 25, 37.5),
];

const prince = new Prince('Jack', 25, 35);

for (const cinderella of cinderellas) {
    if (cinderella.footSize === prince.shoe) {
        prince.wifeByLoop = cinderella;
        break;
    }
}
console.log(prince.wifeByLoop)


const cinderellaMain = cinderellas.find(cinderella => cinderella.footSize === prince.shoe);
prince.wifeByFind = cinderellaMain;
console.log(prince.wifeByFind)

