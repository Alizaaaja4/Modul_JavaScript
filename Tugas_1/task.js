let nama = prompt('Nama customer: ')
let barang = prompt('Beli berapa tv ? ')
let diskon, total
let mtotal


total = barang* 1250000

if (total =>3000000){
    diskon = total * 0.2
} else if(total => 5000000 ){
    diskon = total *0.5
}else{
    diskon = total * 1
}

mtotal = total - diskon

alert(`Selamat datang ${nama} di toko sembako, anda membeli ${barang} tv
dengan harga Rp. 1.250.000. Total tagihan anda:

Sebelum diskon: Rp.${total}
Diskon        : Rp.${diskon}

Total         : Rp.${mtotal}
`)

let saldo = prompt('Masukan saldo anda: ')

if (saldo >= mtotal){
    let hasil = saldo - mtotal
    alert(`Saldo anda: Rp.${saldo}
           Tagihan:    Rp.${mtotal}
           
           Kembalian:  Rp.${hasil}
           
           Terimakasih telah berbelanja di toko kami!!`)
}else{
    alert(`Mohon maaf saldo anda kurang untuk membayar tagihan!!`)
}