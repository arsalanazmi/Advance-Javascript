// When we create a function & assign it to a variable is called function expression.
// Function Expresison in JavaScript are not hoisted.
                
// myfunc();/ / RESULT: Error (You can't call function expression before Function Definition.)
var myfunc = function show() {
    console.log("Hello World");
};
myfunc();


var func = function show1() {
    console.log("Hello World 2");
}; //put semicolon over here in function expression
func();
//show1(); //RESULT: Error