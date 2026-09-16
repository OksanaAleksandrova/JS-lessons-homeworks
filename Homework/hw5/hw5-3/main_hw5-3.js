// #Mbiz5K4yFe7
//
// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// Площадь цилиндра находится по формуле 2 π R(R + H).

const cylinderArea = (radius, height) => 2 * Math.PI * radius * (radius + height);

console.log(cylinderArea(5, 10));
