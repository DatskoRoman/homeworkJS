// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в
//     окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в
//     окремий блок виводяться всі коментарі поточного поста


fetch('https://jsonplaceholder.typicode.com/users')
    .then(responce => responce.json())
    .then(users => {
        let users_box = document.getElementsByClassName('users_block')[0];
        users_box.innerHTML = '';
        for (const user of users) {
            let p_user = document.createElement('p');
            p_user.innerText = `${user.id} - ${user.name}`;
            let posts_block = document.createElement('div');
            let user_button = document.createElement('button');
            user_button.innerText = 'posts of the current user';
            user_button.onclick = () => {
                posts_block.innerHTML = '';
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(value => {
                        // let post_block = document.getElementsByClassName('post_box')[0];

                        for (const user_post of value) {
                            let p_post = document.createElement('p');
                            p_post.innerText = `${user_post.id} - ${user_post.body}`;
                            let comments_block = document.createElement('div');
                            let button_post = document.createElement('button');
                            button_post.innerText = 'comments on the current post';
                            button_post.onclick = () => {
                                fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
                                    .then(postComment => postComment.json())
                                    .then(postComment => {
                                        // let comment_block = document.getElementsByClassName('connents_box')[0];
                                        comments_block.innerHTML = '';
                                        for (const user_comment of postComment) {
                                            let p_comment = document.createElement('p');
                                            p_comment.innerText = `${user_comment.postId} - ${user_comment.id} - ${user_comment.body} - ${user_comment.email}`;
                                            comments_block.appendChild(p_comment);
                                        }
                                    });
                            }
                            posts_block.appendChild(p_post);
                            posts_block.appendChild(button_post);
                            posts_block.appendChild(comments_block);
                        }
                    });
            }
            users_box.appendChild(p_user);
            users_box.appendChild(user_button);
            users_box.appendChild(posts_block);
        }
    })

