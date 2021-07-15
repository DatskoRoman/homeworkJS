/*--створити масив з:*/
/*- з 5 числових значень*/
/*- з 5 стічкових значень*/
/*- з 5 значень стрічкового, числового та булевого типу*/
/*- та вивести його в консоль*/

let numbers = [5, 10, 15, 20, 25]
console.log(numbers)

let strings = ['one', 'two', 'three', 'four', 'five']
console.log(strings)

let boolen_string_number = [5, 10, 15, 20, 25, 'one', 'two', 'three', 'four', 'five', true, false, false, true, true]
console.log(boolen_string_number)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let cars = []
cars [0] = 'skoda';
cars[5] = 'ford';
cars[25] = 'toyota'
console.log(cars)

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let blocks = [
    {text: 'За '},
    {text: 'допомогою '},
    {text: 'циклу '},
    {text: 'for '},
    {text: 'і '},
    {text: 'document.write() '},
    {text: 'вивести '},
    {text: '10 блоків '},
    {text: 'div '},
    {text: 'з довільним текстом всередині '}
]
document.write(`
    <div class="main_block">`);
        for (let block of blocks) {
            document.write(`<div class="ten_blocks"> ${block.text} </div>`)
        }

document.write(`</div>`);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i =0; i<blocks.length; i++) {

    document.write(`<div> ${i} ${blocks[i].text} </div>`)
}


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let blocks2 = [
    {text: 'За '},
    {text: 'допомогою '},
    {text: 'циклу '},
    {text: 'for '},
    {text: 'і '},
    {text: 'document.write() '},
    {text: 'вивести '},
    {text: '10 блоків '},
    {text: 'div '},
    {text: 'з довільним текстом всередині '},
    {text: 'one '},
    {text: 'two '},
    {text: 'three '},
    {text: 'four '},
    {text: 'five '},
    {text: 'six '},
    {text: 'seven '},
    {text: 'eight '},
    {text: 'nine '},
    {text: 'ten '}
]
let ii = 0;
while (ii < blocks2.length){
    document.write(`<h1> ${blocks2[ii].text} </h1>`)
ii++
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let iii = 0;
while (iii < blocks.length){
    document.write(`<h1> ${iii} ${blocks[iii].text} </h1>`)
    iii++
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let date = [1,2,3,4,5,6,7,8,9,10 ]
for (let r = 0; r<date.length; r++ ){
console.log(date[r])}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let num_st = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ]
for (let n = 0; n<date.length; n++ )
console.log(num_st[n])
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let other = ['one', 'two', 'three', 'four', 'five',6,7,8,9,10]
for (let o = 0; o<date.length; o++ )
console.log(other[o])
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let boo_num_str = [1,2,3,4,5,6,7,8,9,10, 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    true, false, false, true, true, false, true, true,false,true]

for (let item of boo_num_str) {
    if (typeof item === 'boolean'){
        console.log(item);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let item of boo_num_str) {
    if (typeof item === 'string'){
        console.log(item);
    }
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові ел
for (let item of boo_num_str) {
    if (typeof item === 'number'){
        console.log(item);
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let colors = []
colors[1] = 'red';
colors[5]= 'black';
colors[8]= 555888;
colors[0]=454545;
colors[7]= true;
colors[10]=false;
for (let i = 0; i<colors.length; i++) {
    console.log(colors[i])
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
let first = 0;
for (let i = 0; i < 10; i ++) {
    first = first + 1;
    console.log(first)
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
let first_1 = 0;

for (let i = 0; i < 100; i ++) {
    first_1 = first_1 + 1;
    document.write(`<div class="oneTo100">${first_1}</div>`)
    console.log(first_1)
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
let first_2 = 0;

for (let i = 0; i < 100; i ++) {
    first_2 = first_2 + 2;
    document.write(`<div class="twoTo100">${first_2}</div>`)
    console.log(first_2)
}
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 2; i < 100; i ++)
    if (i % 2 === 0) {
        document.write(`<div class="two">${i}</div>`)
        console.log(i)
    }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let v = 1; v < 100; v ++)
    if (v % 2 === 1) {
        document.write(`<div class="one">${v}</div>`)
        console.log(v)
    }
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
for (let user of usersWithId) {
    for (let city of citiesWithId){
        if(user.id === city.user_id){
            user.address=city
        }
    }
}
console.log(usersWithId)
