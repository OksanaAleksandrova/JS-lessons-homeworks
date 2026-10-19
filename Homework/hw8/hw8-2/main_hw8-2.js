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

// 1. Перевірка Number.isNaN(value) зайва. NaN має тип number, тому його й так поверне гілка typeof value !== 'object'. Якщо завдання вимагає явної перевірки, це нормально, але додайте коментар, що вона для наочності.
// 2. Гілка typeof value === 'function' теж дублюється наступною перевіркою, бо функція має тип function, а не object. Можна об'єднати: if (value === null || typeof value !== 'object') return value;. Тоді undefined, NaN, функції та примітиви обробляються одним рядком.
