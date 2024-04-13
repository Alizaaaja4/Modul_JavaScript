// DOM (Document Object Models)

document.title = 'Belajar DOM'
const body = document.body

body.append('Selamat belajar :)') // append untuk body

// selain textContent ada inner text dan inner html
const h1 = document.createElement('h1')
h1.textContent = 'Modul 2: DOM'

const p1 = document.createElement('p')
p1.innerHTML = "<marquee>Mari belajar DOM (Document Object Manipulation)</marquee>"

const p2 = document.createElement('p')
p2.innerText = (`DOM merupakan singkatan dari Document Object Model. Artinya, dokumen (HTML)
 yang dimodelkan dalam sebuah objek. Objek dari dokumen ini menyediakan sekumpulan fungsidan 
 atribut/data yang bisa kita manfaatkan dalam membuatprogram Javascript.`)

body.append(h1, p1, p2)

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

btn1.style.border = 'none'
btn1.style.padding = '3px'
btn1.style.background = 'yellow'

function clickButton(){
    btn2.style.background = 'aqua'
    const newText = document.createElement('p')
    newText.textContent = "Selamat anda mendapatkan JACKPOUT!!"
    body.append(newText)
}

function ubahText(){
    btn2.textContent = 'jangan klik aku'
}

function oriText(){
    btn2.textContent = "Klik saya 2"
}