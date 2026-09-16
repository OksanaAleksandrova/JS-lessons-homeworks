// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву

const arrayMinNumber = (numbers) => {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(arrayMinNumber([1, 23, 67, -10, 35]))
