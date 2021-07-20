// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

    let random10 = [];
     function getRandom() {
    for (let i = 0; i < 10; i++) {
        random10.push(Math.round(Math.random() * 100))
    }
    return random10;
}
console.log(getRandom())
// function random10( ) {
//     return Math.floor(Math.random() * 100);
// }
// console.log(random10())

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.
let random1 = []
function getRandom1(min, max) {

for (let i = 0; i < 20; i++) {
    random1.push(Math.round(Math.random() * (max - min) + min))
}
return random1;
}
console.log(getRandom1(10,100))
// function random1( max) {
//     return Math.floor(Math.random() * max);
// }
// let random2 = random1(20);
// console.log(random2);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let randonSort = random1.sort(function (a, b) {
    return a-b
})
console.log(randonSort)
// let random3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// random3 = random3.sort(() => Math.random() - 0.5);
// console.log(random3);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let randonFilter = random1.filter(function (filerFn) {
    return filerFn % 2 === 0;
})
console.log(randonFilter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові.
let randomMap = random1.map(function (mapFn) {
    return mapFn + ''
});
console.log(randomMap);

// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname , email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}

// створити пустий масив, наповнити його 10 об'єктами new User(....)
let user = [
    new User (11, 'Petro', 'FFF', 'fff@gmail.com', +380677771111 ),
    new User (222, 'Igor', 'FFF', 'fff@gmail.com', +380677771112 ),
    new User (31, 'Misha', 'FFF', 'fff@gmail.com', +380677771113 ),
    new User (448, 'Taras', 'FFF', 'fff@gmail.com', +380677771114 ),
    new User (55, 'Roman', 'FFF', 'fff@gmail.com', +380677771115 ),
    new User (68, 'Oksana', 'FFF', 'fff@gmail.com', +380677771116 ),
    new User (77, 'Ira', 'FFF', 'fff@gmail.com', +380677771117 ),
    new User (808, 'Nazar', 'FFF', 'fff@gmail.com', +380677771118 ),
    new User (911, 'Max', 'FFF', 'fff@gmail.com', +380677771119 ),
    new User (1, 'Karina', 'FFF', 'fff@gmail.com', +380677771110 )
];
console.log(user);

// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)
let userFilter = user.filter(function (userFn) {
    return userFn.id % 2 === 0;
})
    .sort (function (a,b) {
        return a.id - b.id
    })
console.log(userFilter);
