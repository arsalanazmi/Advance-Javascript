// Global Variable
var i = "I am a Global Variable Outside Function"
        
function show1(){
    j = "I am Global Variable Inside Function";
    console.log(i); //RESULT: I am a Global Variable Outside Function
    console.log(j); //RESULT: I am a Global Variable Inside Function
}
console.log(i); //RESULT: I am a Global Variable Outside Function
// console.log(j); RESULT: Error
        
show1();
console.log(i); //RESULT: I am a Global Variable Outside Function
console.log(j); //RESULT: I am a Global Variable Inside Function
        
function show2(){
    console.log(i); //RESULT: I am a Global Variable Outside Function
    console.log(j); //RESULT: I am Global Variable Inside Function
}
show2();
        
if(true){
    console.log(i); //RESULT: I am a Global Variable Outside Function
    console.log(j); //RESULT: I am Global Variable Inside Function
}
            
// Local Variable
        
function local(){
    var l = "I am Local Variable";
    console.log(l); //RESULT: I am Local Variable
}
local();
// console.log(l); RESULT: Error
        

// Inner function can access outer function variable but outer function can not access inner function variable
function outerFunc(){
    var a = "A: a Local Variable of Outer Function";
    console.log(a); //RESULT: A: a Local Variable of Outer Function
            
function innerFunc(){
    var b = "B: a Local variable of inner Function";
    console.log(b); //RESULT: B: a Local variable of inner Function
    console.log(a); //RESULT: A: a Local Variable of Outer Function
}
innerFunc();
// console.log(b); RESULT: Error
}
outerFunc();
// console.log(a); RESULT: Error