// Normal Function Declaration
function myFunction(text){
    let name = "Welcome " + text;
    return name;
}
let msg = myFunction("Arsalan");
console.log(msg); //Result: Welcome Arsalan

/************************************************** */
//Function Expression
const myFunction1 = function (text) {
    let name = "Welcome " + text;
    return name;
}
let msg1 = myFunction1("Arsalan");
console.log(msg1); //Result: Welcome Arsalan

/************************************************** */
// Arrow function
const myFunction2 = text => {
    let name = "Welcome " + text;
    return name;
}
let msg2 = myFunction2("Arsalan");
console.log(msg2); //Result: Welcome Arsalan

/************************************************** */
// Arrow function
const myFunction3 = text => "Welcome " + text;

let msg3 = myFunction3("Arsalan");
console.log(msg3); //Result: Welcome Arsalan
 
/************************************************** */
// Arrow function
const myFunction4 = (fname, lname) => `Welcome ${fname} ${lname}`

let msg4 = myFunction4("Arsalan","Azmi");
console.log(msg4); //Result: Welcome Arsalan Azmi