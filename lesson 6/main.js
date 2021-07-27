// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (posts) {
           return  posts.json()
        })
        .then(function (posts2) {
            let userPost = document.getElementsByClassName('block_post')[0];
            for (const user of posts2 ){
                let divPost = document.createElement('div');
                divPost.innerText = user.userId + ' ' + user.id + ' ' + user.title + ' ' + user.body
                userPost.append(divPost);
            }
        });

//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(function (coments) {
            return coments.json()
        })
        .then(function (coments2) {
            let userComent = document.getElementsByClassName('block_post')[0];
            for (const user2 of coments2){
                let divComents = document.createElement('div');
                divComents.innerText = user2.postId + ' ' + user2.id + ' ' + user2.name + ' ' + user2.email + ' '
                + user2.body
                userComent.append(divComents);
            }

        });
