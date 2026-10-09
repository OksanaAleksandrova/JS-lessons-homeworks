// #pOeHKct
// – Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [];

users.push(
    new User(2, 'Bob', 'Smith', 'smith_b@gmail.com', '+10950203112'),
    new User(6, 'Homer', 'Smith', 'smith_h@gmail.com', '+10956703116'),
    new User(4, 'Greg', 'House', 'house_g@gmail.com', '+10953453112'),
    new User(5, 'Lisa', 'Spenser', 'spenser_l@gmail.com', '+10950203789'),
    new User(1, 'Alex', 'Jonson', 'alex_j@gmail.com', '+10990203109'),
    new User(7, 'Tomas', 'Cart', 'tomas_c@gmail.com', '+10954203452'),
    new User(10, 'Eric', 'Smith', 'smith_e@gmail.com', '+10965303132'),
    new User(8, 'John', 'Wally', 'wally_j@gmail.com', '+10967203167'),
    new User(9, 'Jason', 'Bell', 'belljason@gmail.com', '+10976203145'),
    new User(3, 'Sam', 'Wolf', 'swolf@gmail.com', '+10980203332'),
);

const sorter = users.sort((user1, user2) => user1.id - user2.id);
console.log(sorter);

