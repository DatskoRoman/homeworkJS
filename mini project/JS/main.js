// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

let user_block = document.getElementById('user_box');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(response => {

        for (const user of response) {
            let user_info = document.createElement('div');
            let user_p = document.createElement('p')
            user_p.innerText = `${user.id} - ${user.name}`;
            let user_a = document.createElement('a');
            user_a.innerText = ' user-details';
            user_a.href = `user-details.html?user=${JSON.stringify(user)}`;
            user_info.appendChild(user_p)
            user_info.appendChild(user_a);
            user_block.appendChild(user_info);
        }

    })


