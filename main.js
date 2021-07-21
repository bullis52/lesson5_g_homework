//Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
let  getById = document.getElementById('content')
console.log(getById)
//-- отримує текст з параграфа з id "content"
//let getById2 = document.getElementById('content')
console.log(getById.innerText)
//-- отримує текст з блоку з id "rules"
let getById2 = document.getElementById('rules')
console.log(getById2.innerText)
//-- замініть текст параграфа з id 'content' на будь-який інший
console.log(getById.innerText = 'some text')
//-- замініть текст параграфа з id 'rules' на будь-який інший
console.log(getById2.innerText = 'some text2')
//-- змініть кожному елементу колір фону на червоний
//-- змініть кожному елементу колір тексту на синій
let wrap = document.body.children
for (let wraps of wrap){
    wraps.style.background = 'red'
    wraps.style.color = 'blue'
}
//-- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(getById2.classList)
//-- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
let fcrules =  document.getElementsByClassName('fc_rules')
for (let fcrules1 of fcrules ){
    fcrules1.onclick = function (){
        console.log(fcrules1.innerText)
        console.log('adadadad')
    }
}
//-- поміняти колір тексту у всіх елементів fc_rules на червоний
for (let fcrules2 of fcrules){
    fcrules2.style.color = 'yellow'
}
