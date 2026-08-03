// #awLXL6TBzg
//
// з файлу arrays.js (лежить у вкладеннях, або у знайомому вам репозиторії) взяти масив coursesAndDurationArray.
// За допомогою if перевірити кожен його елемент на тривалість навчання.
// У випадку, якщо тривалість довша за 5 місяців, вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let durationJavaScript = coursesAndDurationArray[0].monthDuration;
if (durationJavaScript > 5) {
    console.log('Супер')
} else if (durationJavaScript <= 5) {
    console.log('Тривалість 5 місяців або менше')
}

let durationJava = coursesAndDurationArray[1].monthDuration;
if (durationJava > 5) {
    console.log('Супер')
} else if (durationJava <= 5) {
    console.log('Тривалість 5 місяців або менше')
}

let durationPython = coursesAndDurationArray[2].monthDuration;
if (durationPython > 5) {
    console.log('Супер')
} else if (durationPython <= 5) {
    console.log('Тривалість 5 місяців або менше')
}

let durationQA = coursesAndDurationArray[3].monthDuration;
if (durationQA > 5) {
    console.log('Супер')
} else if (durationQA <= 5) {
    console.log('Тривалість 5 місяців або менше')
}

let durationFullStack = coursesAndDurationArray[4].monthDuration;
if (durationFullStack > 5) {
    console.log('Супер')
} else if (durationFullStack <= 5) {
    console.log('Тривалість 5 місяців або менше')
}

let durationFrontend = coursesAndDurationArray[5].monthDuration;
if (durationFrontend > 5) {
    console.log('Супер')
} else if (durationFrontend <= 5) {
    console.log('Тривалість 5 місяців або менше')
}
