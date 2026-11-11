// SIMPAN NAMA FILE FOTO KAMU DI SINI
const daftarFoto = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg" ,
    "foto5.jpg",
    "foto6.jpg"// Tambahkan foto lain di sini sesuai kebutuhan
];

const pesan = [
    "Hai...",
    "Terima kasih ya sudah menjadi bagian dari perjalanan hidupku selama ini.",
    "Setiap kenangan, tawa, dan momen yang pernah kita lewati sangat berarti buat aku.",
    "Tapi setelah aku renungkan baik-baik, sepertinya jalan kita sudah tidak lagi sama.",
    "Kita berhak mendapatkan ruang untuk tumbuh dan bahagia dengan cara kita masing-masing.",
    "Aku menulis ini bukan karena rasa cintaku hilang begitu saja, tapi karena aku sadar memaksakan sesuatu yang tidak lagi berjalan baik hanya akan menyakiti kita berdua.",
    "Terima kasih atas segalanya. Aku tulus mendoakan yang terbaik untuk masa depanmu."
];

let barisKe = 0;
let karakterKe = 0;
const elemenTeks = document.getElementById("typingText");
let sedangKetik = false;

function buatKelopak() {
    for (let i = 0; i < 15; i++) {
        const petal = document.createElement("div");
        petal.classList.add("petal");
        petal.style.left = Math.random() * 100 + "vw";
        petal.style.width = Math.random() * 10 + 8 + "px";
        petal.style.height = petal.style.width;
        petal.style.animationDuration = Math.random() * 5 + 5 + "s";
        petal.style.animationDelay = Math.random() * 5 + "s";
        document.body.appendChild(petal);
    }
}

// Fungsi memasukkan foto ke grid
function muatFoto() {
    const grid = document.getElementById("galleryGrid");
    grid.innerHTML = "";
    daftarFoto.forEach(namaFoto => {
        const item = document.createElement("div");
        item.classList.add("photo-card");
        item.innerHTML = `<img src="${namaFoto}" alt="Kenangan">`;
        grid.appendChild(item);
    });
}

function mulaiTampilkan() {
    if (sedangKetik) return;
    sedangKetik = true;
    
    const music = document.getElementById("bgMusic");
    music.volume = 0.5;
    music.play();

    document.getElementById("startBtn").style.display = "none";
    document.getElementById("messageBox").style.display = "block";
    
    ketikBaris();
}

function ketikBaris() {
    if (barisKe < pesan.length) {
        if (karakterKe < pesan[barisKe].length) {
            elemenTeks.innerHTML += pesan[barisKe].charAt(karakterKe);
            karakterKe++;
            setTimeout(ketikBaris, 45);
        } else {
            elemenTeks.innerHTML += "<br><br>";
            barisKe++;
            karakterKe = 0;
            setTimeout(ketikBaris, 600);
        }
    } else {
        tampilkanGaleriDanPenutup();
    }
}

function tampilkanGaleriDanPenutup() {
    const gallerySection = document.getElementById("gallerySection");
    const finalNote = document.getElementById("finalNote");

    // Tampilkan galeri foto terlebih dahulu
    gallerySection.style.display = "block";
    setTimeout(() => gallerySection.classList.add("show"), 100);

    // Lalu tampilkan kata penutup
    setTimeout(() => {
        finalNote.style.display = "block";
        setTimeout(() => finalNote.classList.add("show"), 100);
    }, 1000);
}

window.onload = () => {
    buatKelopak();
    muatFoto();
};