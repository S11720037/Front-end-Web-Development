const kirim = document.querySelector("#kirim");
const daftar_mahasiswa = document.querySelector("#daftar-mahasiswa");

kirim.addEventListener('click', (e) => {
	e.preventDefault();

	const nama = document.querySelector("#nama").value;
	const nim = document.querySelector("#nim").value;

	const li = document.createElement("li");
	li.className = 'list-group-item';
	li.appendChild(document.createTextNode(`${nama} / ${nim}`));

	daftar_mahasiswa.append(li);


})

// const li = document.createElement("li");
// li.className = 'list-group-item';
// li.appendChild(document.createTextNode('arter'));

// daftar_mahasiswa.append(li);



