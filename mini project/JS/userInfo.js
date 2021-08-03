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



fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => {
        let h1_user = document.createElement('h1');
        h1_user.innerText = `${user.id} - ${user.name}- ${user.username}`;
        div_user.appendChild(h1_user);
        let p_user = document.createElement('p');
        p_user.innerText = `email: ${user.email}`;
        div_user.appendChild(p_user);
        let p_user1 = document.createElement('p');
        p_user1.innerText = `Address: street ${user.address.street}.  ${user.address.suite}, city ${user.address.city}, 
        zipcode ${user.address.zipcode}, geo ${user.address.geo.lat} ${user.address.geo.lng}`;
        div_user.appendChild(p_user1);
        let p_user2 = document.createElement('p');
        p_user2.innerText = `Phone: ${user.phone}. Website: ${user.website} `;
        div_user.appendChild(p_user2);
        let p_user3 = document.createElement('p');
        p_user3.innerText = ` Company:${user.company.name}. CatchPhrase: ${user.company.catchPhrase}. Bs:${user.company.catchPhrase}. `;
        div_user.appendChild(p_user3);

        let users_box = document.getElementsByClassName('post_user_block')[0];
        let main_div = document.createElement('div');
        main_div.classList.add('main_post_div')
        let post_button = document.createElement('button');
        post_button.innerText = 'post of current user';
        users_box.appendChild(post_button);
        post_button.onclick = () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(value => value.json())
                .then(value => {
                main_div.innerHTML = ''
                    for (const post of value) {
                        let div_post = document.createElement('div');
                        div_post.classList.add('post');
                        let p_post = document.createElement('p');
                        p_post.innerText = post.title;
                        let a_post = document.createElement('a');
                        a_post.innerText = 'post-details';
                        a_post.href = `post-details.html?post_info=${JSON.stringify(post)}`;

                        div_post.appendChild(p_post);
                        div_post.appendChild(a_post);
                        main_div.appendChild(div_post);
                        users_box.appendChild(main_div);

                    }
                });
        };
    });
