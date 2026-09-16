// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об’єкту окремий блок.

const foobar = (users) => {
    for (const user of users) {
        document.write(`<div>${user.id} - ${user.name} - ${user.age}</div>`)
    }
}

foobar([
    {
        id: 1,
        name: 'John',
        age: 18,
    },
    {
        id: 2,
        name: 'Jane',
        age: 26,
    },
    {
        id: 3,
        name: 'Felix',
        age: 32,
    },
    {
        id: 4,
        name: 'Mary',
        age: 33,
    }
])
