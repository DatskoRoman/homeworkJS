// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або
//     document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let contents = document.getElementById('content')
console.log(contents);

// -- отримує текст з блоку з id "rules"
let rule = document.getElementById('rules')
console.log(rule);


// -- замініть текст параграфа з id 'content' на будь-який інший
let newContens = document.getElementById('content');
console.log(newContens);
    newContens.innerText = " замініть текст параграфа з id  на будь-який інший";

// -- замініть текст параграфа з id 'rules' на будь-який інший

    let newRules = document.getElementById('rules');
    console.log(newRules);
    newRules.innerText = 'замініть текст параграфа з id \'rules\' на будь-який інший';

// -- змініть кожному елементу колір фону на червоний
// -- змініть кожному елементу колір тексту на синій
let backcolor = document.body.children;
console.log(backcolor)
for (let changeColor of backcolor){
    changeColor.style.background = 'red';
    changeColor.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesList = document.getElementById('rules');
console.log(rulesList);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік",
// одна вивдоить текст елементу, інша довільний ьексь
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rulesList = document.getElementsByClassName('fc_rules');
console.log(fc_rulesList);

// fc_rulesList.onclick = function () {
//     console.log('текст елемента');
// };
for (let rule of fc_rulesList) {
    rule.onclick = function (){
        console.log(rule.innerText);
    }
    rule.onclick = function (){
        alert('text')
    }
}

for (let color of fc_rulesList){
    color.style.color = 'orange'
}
