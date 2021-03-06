function add2(a, b, c = 70) {
    console.log("A: " + a + " B: " + b + " C: " + c);
}
add2(10, 20); //RESULT: A: 10 B: 20 C: 70
add2(30, 40, 50);  //RESULT: A: 30 B: 40 C: 50
add2(60);  //RESULT: A: 60 B: undefined C: 70

function add3(a, b=0 ,c) {
console.log("A: " + a + " B: " + b + " C: " + c);
}
add3(1, 2, 3);  //RESULT: A: 1 B: 2 C: 3
add3(4, 5);  //RESULT: A: 4 B: 5 C: undefined
add3(6);  //RESULT: A: 6 B: 0 C: undefined

function add4(a, b=0, c=1) {
console.log("A: " + a + " B: " + b + " C: " + c);
}
add4(-1);  //RESULT: A: -1 B: 0 C: 1

// JavaScript also allows the use of null and arrays as default values
function add5(a, b, c=null){
console.log("A: " + a + " B: " + b + " C: " + c);
}
add5(10, 20);  //RESULT: A: 10 B: 20 C: null
add5(10, 20, 30);  //RESULT: A: 10 B: 20 C: 30
add5(10);  //RESULT: A: 10 B: undefined C: null

function add6(a=[101]){
console.log("A: " + a[0]);
}
add6([20]);  //RESULT: A: 20
add6();  //RESULT: A: 101

function add7(num, a=["Geeky", "Shows"]) {
console.log("A: " + a[0] + " B: " + a[1] + " C: " + num);
}
add7(10, [20, 30]); //RESULT: A: 20 B: 30 C: 10