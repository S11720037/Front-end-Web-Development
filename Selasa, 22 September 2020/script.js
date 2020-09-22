console.log('Halo Dunia!');

let angka = [1,3,5,7,9,2,4,6,8];

// for(i of angka){
// 	console.log(i);
// }

// angka.forEach(function(student){
// 	console.log(student)
// });


var ganjil = angka.filter((angka) =>
	angka % 2 != 0 ? true : false
);

console.log(ganjil);

var genap = angka.filter((angka) => 
	angka % 2 == 0 ? true : false
);

console.log(genap);


// const tahun_sekarang = new Date().getFullYear();

// console.log(tahun_sekarang);


//map = membuat array yang baru dari kondisi yang telah kita tentukan
// sorting














