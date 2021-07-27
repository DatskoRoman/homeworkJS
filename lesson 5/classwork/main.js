// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
    let june = document.getElementById('main_header');
        console.log(june);
        june.innerText = 'June 2021'
// b) робить шириниу елементу ul 400px
    let width = document.getElementsByTagName('ul');
        for (let withUl of width){
            withUl.style.width = '400px';
            withUl.style.background = 'red';
        }
// c) робить шириниу всіх елементів з класом linkList шириною 50%
    let width50 = document.getElementsByClassName('linkList ')
        for (let widthLi of width50) {
            widthLi.style.width = '50%';
            // widthLi.style.background = 'grey';
        }
// d) отримує текст який зберігається в елементі з класом listElement2
        let list2 = document.getElementsByClassName('listElement2');
        for (let listEl2 of list2){
            console.log(listEl2.textContent);
        }
// e) отримує всі елементи li та змінює ім колір фону на сірий
        let backColor = document.getElementsByTagName('li');
            for (let backColorLi of backColor){
                backColorLi.style.background = 'grey';
            }
// f) отримує всі елементи 'a' та додає їм клас anchor
        let addAnchor = document.getElementsByTagName('a');
            for (let addClass of addAnchor){
                addClass.classList.add('anchor');
                console.log(addClass);
            }
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
        let px40 = document.getElementsByTagName('a');
            for (let link3Px40 of px40) {
                if (link3Px40.textContent === 'link3') {
                    link3Px40.style.fontSize = '40px'
                }
            }
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
        let textXXX = document.getElementsByTagName('a');
            for (let xxx of textXXX) {
                xxx.classList.add('element_XXX');
                xxx.innerText = 'XXX';
            }
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
        let backPrompt = document.getElementsByClassName('sub-header');
            for (let backcolorSub_header of backPrompt){
                backcolorSub_header.style.background = prompt("Enter the color you want on the Background???")
            }
// j) отримує всі елементи 'sub-header' та змінює колір тексту
// у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
        let textColorPrompt = document.getElementsByClassName('sub-header');
            for (let changeColorText of textColorPrompt){
                if (changeColorText.textContent === 'content 2 segment');
                    changeColorText.style.color = prompt("Enter the color you want on the text???");
            }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
            let changeText;
                changeText = document.querySelector('.content_1 p');
            for (let newText of changeText){
                newText.innerText = prompt("Enter the new text");
            }
// l) отримати елементи p та змінити їм padding на 20px
        let changePadding = document.getElementsByTagName('p');
            for (let newPadding of changePadding){
                newPadding.style.padding = '20px';
            }
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
        let changeText2 = document.getElementsByClassName('text2 ');
            for (let newText2 of changeText2){
                newText2.innerText = 'june 2021'
            }