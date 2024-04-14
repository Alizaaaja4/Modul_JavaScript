/*
TUGAS BESAR:
2. MEMBUAT PERHITUNGAN MATEMATIKA
    - menghitung gaji yang didapat dalam satu bulan
    - nama karyawan, gaji perhari, jumlah hari masuk kerja
**/
const btn2  = document.getElementById ('btn2')

function klik(){
    btn2.style.padding = '6px'
    btn2.style.backgroundColor = 'aqua'
}

function back (){
    btn2.style.backgroundColor = 'white'
    btn2.style.padding = '6px'
}

function viewGaji() {
    let dataBonus = [
        { lembur: "1", bonusGaji: 250000 },
        { lembur: "2", bonusGaji: 300000 },
        { lembur: "3", bonusGaji: 350000 },
        { lembur: "4", bonusGaji: 400000 },
        { lembur: "5", bonusGaji: 450000 },
    ];
    let dataID = [
        { ID: "001" }, { ID: "002" }, { ID: "003" }, { ID: "004" },
        { ID: "005" }, { ID: "006" }, { ID: "007" }, { ID: "008" }
    ];

    const gajiPerHari = 32000;
    let gajiTotal = 0;

    let id = prompt("ID Karyawan: ");
    if (id.toLowerCase() === "selesai") {
        alert("Terima kasih telah menggunakan sistem gaji.");
        return;
    }

    let conf = dataID.find(item => item.ID === id);

    if (conf) {
        let nama = prompt("Nama Karyawan: ");
        let jumlahLembur = prompt("Masukkan jumlah lembur: ");
        let conf2 = dataBonus.find(data => data.lembur === jumlahLembur);

        if (!conf2) {
            alert("Data lembur tidak valid.");
            return;
        }

        let jumlahKerja = parseInt(prompt("Masukkan jumlah hari kerja: "));
        gajiTotal = (jumlahKerja * gajiPerHari) + (parseInt(jumlahLembur) * conf2.bonusGaji);

        alert(`
        Nama Karyawan: ${nama}
        ID Karyawan: ${id}
        Total Hari Kerja: ${jumlahKerja}
        Total Lembur: ${jumlahLembur}
        Total Gaji: Rp. ${gajiTotal.toLocaleString()}`);
    } else {
        alert("ID Karyawan tidak valid. Silahkan coba lagi.");
    }
}
