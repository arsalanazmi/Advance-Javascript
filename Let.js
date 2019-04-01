var x = 10;
console.log(x); //RESULT: 10
{
    let x = 2;
    console.log(x); //RESULT: 2
}
console.log(x); //RESULT: 10

/************************************************** */

let myName = "Arsalan";
console.log(myName); //RESULT: Arsalan

function getName(){
    let myName = "Raza";
    console.log(myName); //RESULT: Raza
    
}
getName();

console.log(myName); //RESULT: Arsalan

/************************************************** */

let myName1;
myName1 = "Arsalan";
console.log(myName1); //Result: Arsalan

/************************************************** */

let myName2;
console.log(myName2); // Result:undefined
myName2 = "Arsalan";

/************************************************** */

// myName3 = "Arsalan";
// console.log(myName3); //Result: Error
// let myName3;

/************************************************** */
// myName4 = "Arsalan";
// let myName4;
// console.log(myName4); //Result: Error