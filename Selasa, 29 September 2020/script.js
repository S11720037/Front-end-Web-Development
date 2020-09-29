// latihan dom


const judul_halaman = document.querySelector("title");
judul_halaman.text+= " :v";


const mahasiswa = document.querySelector("#daftar-mahasiswa");
// console.log(daftar_mahasiswa);

const daftar_mahasiswa = mahasiswa.querySelectorAll("li");

daftar_mahasiswa[0].classList.add('text-danger');
daftar_mahasiswa[1].classList.add('text-success');