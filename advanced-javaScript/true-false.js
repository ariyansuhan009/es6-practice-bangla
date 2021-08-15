/*
    ***Falsy***
    0
    ""
    undefiend
    null
    NaN

    ****Truthy*****
    '0',  ' ', []

*/
const age = 4;
let name = 'NaN';
console.log(name);
if(name || name == 0){
    console.log('Condition is True');
}else{
    console.log('Condition is False');
}