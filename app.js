const qizil = document.getElementById('qizil');
const sariq = document.getElementById('sariq');
const yashil = document.getElementById('yashil');

let holat = 0;
function chiroqniOzgartir() {
    qizil.classList.toggle('yon', holat === 0);
    sariq.classList.toggle('yon', holat === 1);
    yashil.classList.toggle('yon', holat === 2);
    holat = (holat + 1) % 3;
}

setInterval(chiroqniOzgartir, 2000);
