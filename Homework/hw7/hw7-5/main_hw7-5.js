// #8abtVjRv
// – Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

function Client(id, name, surname, email, phone, ...products) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(title, price) {
    this.title = title;
    this.price = price;
}


let clients = [];

clients.push(
    new Client(
        1, 'Alex',
        'Jonson',
        'alex_j@gmail.com',
        '+10990203109',
        new Product('coffee', 500),
        new Product('tea', 130),
        new Product('cookies', 60),
        new Product('chocolate', 80)),
    new Client(
        2,
        'Bob',
        'Smith',
        'smith_b@gmail.com',
        '+10950203112',
        new Product('tv', 50000),
        new Product('phone', 60000),
        new Product('headphones', 8000),),
    new Client(
        3,
        'Sam',
        'Wolf',
        'swolf@gmail.com',
        '+10980203332',
        new Product('toaster', 1500),
        new Product('kettle', 1000)),
    new Client(
        4,
        'Greg',
        'House',
        'house_g@gmail.com',
        '+10953453112',
        new Product('juice', 50),
        new Product('water', 30),
        new Product('tea', 130),),
    new Client(
        5,
        'Lisa',
        'Spenser',
        'spenser_l@gmail.com',
        '+10950203789',
        new Product('cream', 50),
        new Product('cheese', 130),
        new Product('meat', 150),
        new Product('fish', 330),
        new Product('eggs', 80),),
    new Client(
        6,
        'Homer',
        'Smith',
        'smith_h@gmail.com',
        '+10956703116',
        new Product('coffee', 500),
        new Product('tea', 130)),
    new Client(
        7,
        'Tomas',
        'Cart',
        'tomas_c@gmail.com',
        '+10954203452',
        new Product('tv', 50000)),
    new Client(
        8,
        'John',
        'Wally',
        'wally_j@gmail.com',
        '+10967203167',
        new Product('toaster', 1500),
        new Product('kettle', 1000),
        new Product('pan', 700)),
    new Client(
        9,
        'Jason',
        'Bell',
        'belljason@gmail.com',
        '+10976203145',
        new Product('juice', 50),
        new Product('water', 30)),
    new Client(
        10,
        'Eric',
        'Smith',
        'smith_e@gmail.com',
        '+10965303132',
        new Product('cheese', 130))
);

const sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);


