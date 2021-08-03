// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = new URL(location);
const jsonUser = url.searchParams.get('post_info');
const post = JSON.parse(jsonUser);
const div_post = document.getElementById('post_info');



fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
.then(user => user.json())
.then(users =>{
    let h1_post = document.createElement('h1');
    h1_post.innerText = `userId: ${post.userId} id:${post.id} title:${post.title}`;
    div_post.appendChild(h1_post);
    let h2_post = document.createElement('h2');
    h2_post.innerText = `body: ${post.body}`;
    div_post.appendChild(h2_post);
    let comment_block = document.getElementById('comments');
    for (let comment of users){
        let p_comment = document.createElement('p');
        p_comment.innerText = `Comment: ${comment.body}`;
        comment_block.appendChild(p_comment)

    }
})