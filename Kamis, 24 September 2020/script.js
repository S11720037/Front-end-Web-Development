// fetch('https://jsonplaceholder.typicode.com/todos')
// .then(response => response.json()
// .then(data => console.log(data)));

// function hello(){
// 	console.log("Halo Dunia!");
// }
// hello();


// const square = function(x){
// 	return x * x;
// }
// console.log(square(7));

// const sorted = [12,34,45,76,1].sort((a,b) => a-b);
// console.log(sorted)



// OOP

//constructor function
// function Person(first_name,last_name,gender){
// 	this.first_name = first_name;
// 	this.last_name = last_name;
// 	this.gender = gender;

// 	//method
// 	this.info = function(){
// 		return `My name is ${this.first_name} ${this.last_name}`
// 	}
// }


// function Student(first_name,last_name,gender,prodi){
// 	Person.call(this,first_name,last_name,gender);

// 	this.prodi = prodi
// }



// const person_1 = new Person("Arter","Tendean","Male");
// console.log(person_1);
// console.log(person_1.info());

// const student_1 = new Student('Arter','Tendean','Male','Informatika');
// console.log(student_1);
// console.log(student_1.info());



// OOP es6
class Person{
	constructor(first_name,last_name,gender){	
		this.first_name = first_name;
		this.last_name = last_name;
		this.gender = gender;
	}

	info(){
		return `Hi, my name is ${this.first_name}`;
	}
}

const person_1 = new Person('Arter','Tendean','Male');
console.log(person_1.info());


































