/*
TUGAS BESAR:
1. MEMBUAT PERHITUNGAN MATEMATIKA
    - luas lingkaran
    - luas segitiga
    - luas persegi panjang
    - luas jajargenjang
**/
document.title = 'Kalkulator Sederhana'
const body = document.body

const btn = document.getElementById('btn')

btn.style.padding = '5px'
btn.style.background = 'yellow'

function letsgo(){
    const phi = 3.14
    let start = prompt("Anda ingin mencoba kalkulator ini (y/n) ?")
    if (start == 'Y' || start == 'y'){
        let menu1 = prompt(`
        =-=-=-= Kalkulator Sederhana =-=-=-=
        [1]. Luas Lingkaran
        [2]. Luas Segitiga
        [3]. Luas Persigi Panjang
        [4]. Luas Jajargenjang
        [5]. Kembali
        
        Ketik nomor (1-5): `)
        switch(menu1){
            case '1' : let r = prompt("Input jari-jari (r): ")
                    let luasLingkaran = phi * Math.pow(r,2)
                    alert(`Luas lingkaran ${luasLingkaran} m^2`)
                    break
            case '2' : let a = prompt("Input alas segitiga: ")
                       let t = prompt("Input tinggi segitiga: ")
                       let luasSegitiga = 0.5 * a * t
                       alert(`Luas segitiga ${luasSegitiga} m^2`)
                       break
            case '3' : let p  = prompt("Input Panjang persegi: ")
                        let l = prompt("Input lebar persegi: ")
                        let luasPersegi = p * l
                        alert(`Luas Persegi Panjang ${luasPersegi} m^2`)
                        break
            case '4' : a = prompt("Input alas jajargenjang: ")
                        t = prompt("Input tinggi jajargenjang: ")
                        let luasJajargenjang = a * t
                        alert(`Luas Jajargenjang ${luasJajargenjang} m^2`)
                        break
            case '5' : alert("Anda telah keluar dari program ini!!")
                        break
            default: alert("Mohon maaf option tidak tersedia!!")
                    letsgo()
                    break
        }
    } else if (start == 'N' || start == 'n'){
        alert("Anda telah keluar dari program ini!!")
    } else {
        letsgo
    }
}
