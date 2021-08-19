var name = "Ariyan";

function add(num1, num2){
    window.result = num1 + num2;
    console.log("result inside:" ,name);
    function double(num){
        return num *2;

    }
    var total = double(result);
    return total;
}

console.log("result outside: ", name);
var sum = add(13, 21);
console.log(sum);