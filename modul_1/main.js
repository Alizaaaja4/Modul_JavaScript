// alert('haiii') --> pop up

// prompt('Ponakan: tolong kasih saya THR !!') --> ini promt pertanyaan

// ada 3 varibal 
// var usia = 30
// const x = 1 //ini tidak dapat diubah nilai nya
// let y = 2 //nilai nya dapat diubah atau tidak
// y=10 // maka nilai y =10 yang akan diambil

// console.log('umur saya adalah ' + usia)
// console.log("saya hanya memiliki " + x + " bersaudara")
// console.log('saya rangking ke ' + y)

// let kampus = prompt('Kuliah dimana kamu ? ')
// alert('saya berkuliah di ' + kampus)


// Belajar tipe data!!
let nama = 'jojo jeni' // tipe string
let usia = 20 // tipe data integer
let tinggiBadan = 164.5 // tipe data float atau double
let beratBdan //variabel kosong (tidak ada nilai)
let pacar = null //tidak bernilai

beratBdan = 51

// kondisi if else
if(pacar == null){
    pacar = 'belum punya'
}else{
    pacar = 'sudah punya'
}

// kondisi switchcase
// switch(pacar){
//     case 1: pacar = 'punya 1 aja' 
//     break
//     case 2: pacar = 'punya pacar 2, aku cukup genit'
//     break
//     default: pacar = 'belum punya pacar'
//     break
// }

let saldoAwal = 50000
let saldoTambahan = 80000
const hutang = 20000
const totalSaldo = saldoAwal + saldoTambahan - hutang

alert(`nama saya ${nama} usia saya itu ${usia} dan tinggi badan saya ${tinggiBadan}
 cm berat badan saya ${beratBdan} kg dan pacar saya ${pacar}`
)

alert(`saldo awal saya Rp.${saldoAwal} & saldo tambahan saya Rp.${saldoTambahan}. Dengan total saldo Rp.${totalSaldo}`
)