// #ymAmN2xJ
// Створити форму з трьома полями для name, surname, age та кнопкою.
// При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом


const userForm = document.forms.userForm;

const target = document.getElementById("target");

userForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameValue = userForm.name.value;
    const surnameValue = userForm.surname.value;
    const ageValue = userForm.age.value;

    let obj = {nameValue, surnameValue, ageValue};

    console.log(obj);
    target.innerText = obj.nameValue + ' ' + obj.surnameValue + ' ' + obj.ageValue;
})
