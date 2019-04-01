a = 10;
console.log("a: " + a); //RESULT: a: 10
var a;

var b = 20;
console.log("b: " + b + " c: " + c); //RESULT: b: 20 c: undefined

var c = 30;
console.log("b: " + b + " c: " + c); //RESULT: b: 20 c: 30


var i = "Hello";
console.log(i); //RESULT: Hello

function show3() {
    console.log(i); //RESULT: undefined
    var i = "World";
    console.log(i); //RESULT: World
}
show3();