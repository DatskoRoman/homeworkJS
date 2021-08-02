// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const url = new URL(location);
const jsonUser = url.searchParams.get('post_info');
const post = JSON.parse(jsonUser);
const div_post = document.getElementById('post_info');
div_post.innerText = jsonUser;

let comment_block = document.getElementsByClassName('comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${user.id}/comments`)
.then(user => user.json())
.then(users =>{
    for (const comment of users){
        let p_comment = document.createElement('p');
        p_comment.innerText = comment.body;
        comment_block.appendChild(p_comment);

    }
})