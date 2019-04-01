// Rest Parameter
function restShow(...args) {
    console.log(args); //Result: [10, 20, 30, 40, 50]
}
restShow(10,20,30,40,50);
        
// Default Parameter
function show() {
     console.log(arguments); //Result:  [10, 20, 30, 40, 50, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
show(10, 20, 30, 40, 50);

// Rest Parameter
function rest(a, ...args) {
    console.log("a: " + a); //Result: a: 10
    console.log(args); //Result: [20, 30, 40, 50]
}
rest(10, 20, 30, 40, 50);

// Default Parameter
function argument(a) {
    console.log("a: " + a); //Result: a: 10
    console.log(arguments); //Result: [10, 20, 30, 40, 50, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}
argument(10,20,30,40,50);