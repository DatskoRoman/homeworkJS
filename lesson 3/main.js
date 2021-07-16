// - створити функцію яка приймає масив та виводить його
function one (){
let one_l = ['one', 'four', 'eight']
    console.log(one_l);
}
one()

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function min() {
    let result= arguments[0];
    for(let y in arguments) {
        if(arguments[y] < result) {
            result = arguments[y];
        }
    }
    return result;
}

console.log(min(5,3,-2));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function max() {
    let result= arguments[0];
    for(let f in arguments) {
        if(arguments[f] > result) {
            result = arguments[f];
        }
    }
    return result;
}
console.log(max(55,333,17));

// - створити функцію яка повертає найбільше число з масиву
let max_number = [267, 306, 108];
let max_f = Math.max.apply(Math, max_number);
console.log(max_f)

// - створити функцію яка повертає найменьше число з масиву
let min_number = [267, 306, 108];
let min_f = Math.min.apply(Math, min_number);
console.log(min_f)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let numbers = [5, 10, 15, 50];

let sum = numbers.reduce( function(total, amount){
    return total + amount
});
console.log(sum)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let numbers_1 = [5, 10, 15, 50];
let average = numbers_1.reduce((total, amount, index, array) => {
    total += amount;
    if( index === array.length-1) {
        return total/array.length;
    }else {
        return total;
    }
});
console.log(average)

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
function random_1(max) {
    return Math.floor(Math.random() * max);
}
console.log(random_1(100));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
let user = {name: "Alex", age: 14, model: 'Camry'};
let a = Object.keys(user);
console.log(a);

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
let user_1 = {name: 'Dima', age: 13, model: 'Camry'};
let k = Object.values(user_1);
console.log(k);

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
    let obj_1 = [1,2,3,4];
    let obj_2 = [2,3,4,5];
    let newObj = [];
    for (let i = 0; i<obj_1.length; i++){
    newObj.push(obj_1[i]+obj_2[i])
    }
console.log(newObj)

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let abc = ['a', 'b', 'c'];
for (let i = 1; i <= 3; i++){
    abc.push(i);
}
console.log(abc)

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
let old = [1, 2, 3];
console.log(old);
let reversed = old.reverse();
console.log(reversed);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let a123 = [1, 2, 3]
let a123456 = a123.push(4, 5, 6)
console.log(a123)

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
let b123 = [1, 2, 3]
let b123456 = b123.unshift(4, 5, 6)
console.log(b123)

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
let slice_1 = [1, 2, 3, 4, 5]
console.log(slice_1.slice(3));

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
let slice_2 = [1, 2, 3, 4, 5]
console.log(slice_2.slice(0,2))

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
let splice_1 = [1, 2, 3, 4, 5]
splice_1.splice(3,2, 'a', 'b', 'c');
console.log(splice_1);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let ten = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < ten.length; i++){
    if (ten[i]%2 === 0){
        console.log(ten[i]);
    }
}

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let ten_1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let ten_2 = []
for (let i = 0; i < 10; i++) {
    ten_2[i] = ten_1[i];
}
console.log(ten_2);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc10 = [ 'a', 'b', 'c'];
let  abc11='';
for (let i = 0; i < abc10.length; i++){
    abc11 = abc11 + abc10[i];
}
console.log(abc11);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let abc12 = [ 'a', 'b', 'c'];
let  abc13= '';
let i = 0
while (i < abc12.length){

    abc13 = abc13 + abc12[i];
    i++;
}
console.log(abc13);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
let abc14 = [ 'a', 'b', 'c'];
let abc15 = ''
for (let abc of abc14){
    abc15 = abc15 +abc
}
console.log(abc15)


