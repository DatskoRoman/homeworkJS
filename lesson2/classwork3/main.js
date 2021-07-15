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
};


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