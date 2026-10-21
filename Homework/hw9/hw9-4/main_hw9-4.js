// #Kx1xgoKy8
// – Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class=’item’>, в якому буде <h1 class=’heading’> з title елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const course of coursesAndDurationArray) {
    const divCourses = document.createElement('div');
    const h1Title = document.createElement('h1');
    h1Title.innerText = course.title;
    h1Title.className = 'heading';
    const pDuration = document.createElement('p');
    pDuration.innerText = course.monthDuration;
    pDuration.className = 'description';

    divCourses.append(h1Title, pDuration);
    document.body.appendChild(divCourses);
}
