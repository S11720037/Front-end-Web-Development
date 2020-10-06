const daftar_mahasiswa = document.querySelector('.list-group-item:nth-of-type(2)');
console.log(daftar_mahasiswa);

const title = document.querySelector('title');
title.textContent = 'Hello Sekai!';

const button_submit = document.querySelector('input[type="submit"]');
// console.log(button_submit);

const students = document.querySelectorAll('.list-group-item:nth-child(odd)');
// console.log(students[0].textContent);

students.forEach( function(student){
	// console.log(student);
	student.classList.add('bg-warning');
});


// event handling
const main = document.querySelector('body');

main.addEventListener( 'contextmenu',e =>
	e.preventDefault()
);

//box

const box = document.querySelector("#box");

box.addEventListener('mousemove', e => {
box.style.backgroundColor = `rgb(${e.clientY},${e.clientX},${e.clientY}`;
});

// function eventHandler(e){
// 	console.log(e);
// }



