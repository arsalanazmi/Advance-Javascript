var a = function(){
    console.log("Hello World!"); //RESULT: Hello World!
};
a();

var b = function (i, j) {
    return i + j;
};

var c = b(10, 20);

console.log(c); //RESULT: 30
console.log(b(20, 20)); //RESULT: 40