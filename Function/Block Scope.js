if (true) {
    var a = 10;
    console.log(a); //Result:10
}
console.log(a); //Result:10

// Scope of let & cons is within that block only not outside that block
if (true) {
    let b = 10;
   console.log(b); //Result:10
}
// console.log(b); Result:Error