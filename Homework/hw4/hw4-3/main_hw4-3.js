// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// Площадь цилиндра находится по формуле 2 π R(R + H).

function cylinderArea(radius, height) {
    return 2 * Math.PI * radius * (radius + height)
}

cylinderArea(5, 10);
