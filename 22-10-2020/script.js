const judul_halaman = document.querySelector('title');

let i = 0;
setInterval(() => {

	if(i == 0){
		judul_halaman.text = 'Arter Tendean';
		i = 1;
	}
	else{
		judul_halaman.text = 'Tendean Arter';	
		i = 0;
	}


},1000)