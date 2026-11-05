// #j693ca8
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const button = document.getElementById("check-button");

button.onclick = function () {
    const age = document.getElementById("age").value;
    if (age < 18) {
        alert("You are under 18");
    } else {
        alert("You are 18 or older");
    }
};
