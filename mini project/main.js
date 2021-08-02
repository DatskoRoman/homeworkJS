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
            user_info.innerText = `${user.id} - ${user.name}`;
            let user_a = document.createElement('a');
            user_a.innerText = ' user-details';
            user_a.href = `user-details.html?user=${JSON.stringify(user)}`;

            user_info.appendChild(user_a);
            user_block.appendChild(user_info);
        }

    })


// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так,
// что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)