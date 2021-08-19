function doSomthing(){
    console.log(3333);
}
console.log(2222);
/*
 setTimeout(() => {
    console.log('See you later');
 }, 2000) 
setTimeout(function(){
    console.log('lazy man');
},4000)
*/

setInterval(function(){
    console.log('Do it');
}, 2000)
console.log(4444);
