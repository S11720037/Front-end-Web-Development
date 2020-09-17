// Cara pertama
const array_1 = new Array(1,2,3,4,5,6,7,8,9,10);

console.log(array_1);
console.log(array_1.length);

// Cara kedua
const array_2 = [2,4,6,8,10,12,14,16,28,20];

console.log(array_2);

// Cara ketiga - spread operator
const array_3 = [1,3,5,7,9,11, ...array_2];
console.log(array_3)

array_2[20] = 100;
console.log(array_2.pop());


// Object
const student = {
	name: "Arter Tendean",
	nim: 10501212121212,
	hobbies: ['lorem','ipsum','dolor'],
}

student.fakultas = 'FIK'

// destructuring

const {name, nim, hobbies} = student

// console.log(`Halo ${name}, NIM kamu adalah ${nim}`)

for(i in array_2){
	console.log(i);
}














