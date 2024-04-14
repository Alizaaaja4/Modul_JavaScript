// BELAJAR ARRAY

// 1. Index dimulai dari 0, tapi panjang array dimulai dari 1
const dataCoba = []
dataCoba[0] ='hobi'
dataCoba[1] = 'ujian'
dataCoba[2] = 'makan'
console.log(dataCoba)

const dataKita = new Array('minum', 'sekolah')
console.log(dataKita)

const data = ['nama', 'tanggal', 'pekerjaan']
const QnA = data.includes('tanggal')
const posisiData = data.indexOf('tanggal')

if(QnA){
    console.log(`tanggal terdapat pada index ke-${posisiData}`)
} else {
    console.log('saya tidak tahu posisi nya')
}

