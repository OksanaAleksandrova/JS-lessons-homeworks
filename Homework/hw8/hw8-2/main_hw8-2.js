// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкта.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції, які в нього були до цього моменту.


function deepCopy(value) {
    if (value === undefined || value === null) {
        return value;
    }

    if (Number.isNaN(value)) {
        return NaN;
    }

    if (typeof value === 'function') {
        return value;
    }

    if (typeof value !== 'object') {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(item => deepCopy(item));
    }

    const copy = {};
    for (const key of Object.keys(value)) {
        copy[key] = deepCopy(value[key]);
    }
    return copy;
}

const user = {
    name: 'Alex',
    surname: undefined,
    age: 25,
    phone: NaN,
    email: null,
    skills: ['JS', 'HTML'],
    address: {
        city: 'Kyiv'
    },
    sayHello: function () {
        console.log('Hello, ' + this.name);
    }
};

const userDeepCopy = deepCopy(user);

console.log(userDeepCopy);
userDeepCopy.sayHello();

console.log(userDeepCopy.surname);
console.log('surname' in userDeepCopy);

console.log(userDeepCopy.phone);
console.log(userDeepCopy.email);

userDeepCopy.address.city = 'Lviv';
userDeepCopy.skills.push('CSS');
console.log(userDeepCopy);
console.log(user.address.city);
console.log(user.skills);

