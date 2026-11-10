// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантаженні сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


const container = document.getElementById('container');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const users = Array.from({length: 100}, (item, index) => {
    return {
        id: index + 1,
        name: `User ${index + 1}`
    };
});

let currentPage = 0;
let itemsPerPage = 10;

function renderUsers() {
    const start = currentPage * itemsPerPage;
    const end = start + itemsPerPage;

    const currentUsers = users.slice(start, end);

    container.innerHTML = '';

    currentUsers.forEach(user => {
        const div = document.createElement('div');

        div.textContent = `${user.id}. ${user.name}`;

        container.appendChild(div);
    });
}

nextButton.onclick = function () {
    if ((currentPage + 1) * itemsPerPage < users.length) {
        currentPage++;
        renderUsers();
    }
};

prevButton.onclick = function () {
    if (currentPage > 0) {
        currentPage--;
        renderUsers();
    }
};

renderUsers();

