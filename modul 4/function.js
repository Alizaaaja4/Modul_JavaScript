// Belajar function

function addName(firstname, lastname){
    console.log(firstname, lastname)
}

addName('nama depan', 'nama belakang')

// atau bisa dijadikan variabel

const fullname = new Function('firstname', 'lastname', 'console.log(firstname, lastname)')
fullname('aliman', 'yudohno')

// untuk perhitungan dapat menggunakan ini

// cara ke 1
const sum = new Function ('x', 'y', 'return x+y')
console.log(sum(1,7))

// cara ke 2
function sum2(x,y){
    console.log(x+y)
}
sum2 (8, 10)

// cara ke 3 => arrow function
const sum3 = (x, y) => {
    console.log(x+y)
}
sum3(3,10)

// contoh function untuk validasi
function randomKey (){
    const randomNumber = ~~(Math.random() * 1000)
    if (randomNumber > 200){
        console.log("Key number lebih dari 200", randomNumber)
    } else{
        console.log("Key number kurang dari 200", randomNumber)
    }
}
randomKey()