// #Jg0gPO00
// створити конвертор ваги з кг у фунти. дані заповнюються через інпут.
// При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок

const kilosInput = document.getElementById('kilos');
const poundsResult = document.getElementById('pounds');

kilosInput.oninput = function () {
    poundsResult.innerText = +this.value * 2.2;
}
