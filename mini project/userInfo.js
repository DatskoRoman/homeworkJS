// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
const url = new URL(location);
const jsonUser = url.searchParams.get('user');
const user = JSON.parse(jsonUser)
const div_user = document.getElementById('info_user')
div_user.innerText = jsonUser;

fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => {
        console.log(users);
        let users_box = document.getElementsByClassName('post_user_block')[0];
        let post_button = document.createElement('button');
        post_button.innerText = 'post of current user';
        users_box.appendChild(post_button);
        post_button.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(value => value.json())
                .then(value => {
                    for (const post of value) {
                        let p_post = document.createElement('p');
                        p_post.innerText = post.title;
                        users_box.appendChild(p_post);
                        let a_post = document.createElement('a');
                        a_post.innerText = 'post-details';
                        a_post.href = `post-details.html?post_info=${JSON.stringify(post)}`;
                        users_box.appendChild(a_post);
                    }
                });
        };
    });
