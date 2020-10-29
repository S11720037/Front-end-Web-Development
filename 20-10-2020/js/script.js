// setTimeout(function(){
// 	console.log('arter tendean');
// },5000);

// setInterval(function(){
// 	console.log('tendean arter');
// },5000);

const ajax = new XMLHttpRequest();

ajax.open("GET","https://api.animemoe.us/quotes/random/");

ajax.send();