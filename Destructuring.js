//DESTRUCTURING ARRAY
let myArray = ["Arslan","Raza",2];
let [firstName, lastName, degrees] = myArray;
console.log(firstName); //RESULT: Arslan
console.log(lastName); //RESULT: Raza
console.log(degrees); //RESULT: 2
console.log(myArray); //RESULT: ["Arslan", "Raza", 2]
var sentence = `${firstName} ${lastName} has ${degrees} master degrees.`;
console.log(sentence); //RESULT: Arslan Raza has 2 master degrees.

/************************************************** */

let myArray1 = ["Arslan","Raza"];
let [firstName1, lastName1, degrees1] = myArray1;
console.log(firstName1); //RESULT: Arslan
console.log(lastName1); //RESULT: Raza
console.log(degrees1); //RESULT: undefined
console.log(myArray1); //RESULT: ["Arslan", "Raza"]
var sentence = `${firstName1} ${lastName1} has ${degrees1} master degrees.`;
console.log(sentence); //RESULT: Arslan Raza has undefined master degrees.

/************************************************** */
//DESTRUCTURING OBJECT

let myObject = {
    firstName2: "Arsalan",
    lastName2: "Azmi",
    degrees2:2,
}
console.log(myObject.firstName2); //RESULT: Arsalan
console.log(myObject.lastName2); //RESULT: Azmi
console.log(myObject.degrees2); //RESULT: 2

let {firstName2,lastName2,degrees2} = myObject

console.log(firstName2); //RESULT: Arsalan
console.log(lastName2); //RESULT: Azmi
console.log(degrees2); //RESULT: 2

var sentence = `${firstName2} ${lastName2} has ${degrees2} master degrees.`
console.log(sentence); //RESULT: Arsalan Azmi has 2 master degrees.
 
 
// /************************************************** */

let myObject1 = {
    firstName3: "Arsalan",
    lastName3: "Azmi",
    degrees3:2,
}
console.log(myObject1.firstName3); //RESULT: Arsalan
console.log(myObject1.lastName3); //RESULT: Azmi
console.log(myObject1.degrees3); //RESULT: 2

let {firstName3,lastName3} = myObject1

console.log(firstName3); //RESULT: Arsalan
console.log(lastName3); //RESULT: Azmi
// console.log(degrees3); //Result: Error

// var sentence = `${firstName3} ${lastName3} has ${degrees3} master degrees.`
// console.log(sentence); //Result: Error