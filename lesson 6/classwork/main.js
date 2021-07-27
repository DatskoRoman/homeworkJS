// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(responce => responce.json())
        .then(users=> {
        let users_box = document.getElementsByClassName('post_block')[0];
        for (const user of users){
                let p_post = document.createElement('p');
                p_post.innerText = `${user.id} - ${user.body}`;
                let post_button = document.createElement('button');
                post_button.innerText = 'info about a post';
                post_button.onclick = () => {
                        fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
                        .then(value => value.json())
                            .then(value => {
                            console.log(value)
                            });
                };
                users_box.appendChild(p_post);
                users_box.appendChild(post_button);

        }
            });