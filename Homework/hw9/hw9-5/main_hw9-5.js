// - Є масив coursesArray
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть
// зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let container = document.createElement('div');
document.body.appendChild(container);

for (const course of coursesArray) {
    let courseBlock = document.createElement('div');
    courseBlock.className = 'course-block';
    container.appendChild(courseBlock);

    let titleBlock = document.createElement('div');
    titleBlock.className = 'title-block';
    titleBlock.textContent = 'title: ' + course.title;
    courseBlock.appendChild(titleBlock);

    let durationBlock = document.createElement('div');
    durationBlock.className = 'duration-block';
    courseBlock.appendChild(durationBlock);

    let monthBlock = document.createElement('div');
    monthBlock.className = 'month-block';
    monthBlock.textContent = 'month duration: ' + course.monthDuration;
    durationBlock.appendChild(monthBlock);

    let hourBlock = document.createElement('div');
    hourBlock.className = 'hour-block';
    hourBlock.textContent = 'hour duration: ' + course.hourDuration;
    durationBlock.appendChild(hourBlock);

    let modulesBlock = document.createElement('div');
    modulesBlock.className = 'modules-block';
    courseBlock.appendChild(modulesBlock);

    let modulesTitle = document.createElement('div');
    modulesTitle.textContent = 'modules:';
    modulesBlock.appendChild(modulesTitle);

    let modulesList = document.createElement('ul');
    modulesBlock.textContent = 'modules:';
    modulesBlock.appendChild(modulesList);

    for (const module of course.modules) {
        let moduleItem = document.createElement('li');
        moduleItem.textContent = module;
        modulesList.appendChild(moduleItem);
    }
}


