const body = document.body

const h1 = document.createElement('h1')
h1.innerHTML = "<marquee> TUGAS 2: DOM (Document Object Models) </marquee>"

body.append(h1)

function tampilText(){
    btn.style.background = 'pink'
    const newText = document.createElement('p')
    newText.textContent = "Selamat Ulang Tahun"

    if (newText == true){
        newText.style.background = 'red'
    } else{
        newText.style.background = 'yellow'
    }

    body.append(newText)
}

function backText(){
    btn.style.background = 'none'
}