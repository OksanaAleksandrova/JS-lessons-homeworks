// #gsKLAsNWM
//
// Через Array.prototype. створити власний foreach, filter

Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFilter = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

const numbers = [1, 2, 3, 4, 5, 6];

numbers.myForEach((item, index) => console.log(index, item));

const even = numbers.myFilter(item => item % 2 === 0);
console.log(even);
console.log(numbers);
