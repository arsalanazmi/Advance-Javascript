/************************************************** */
// Try any part one at a time

// let obj1 = {fname: "Arsalan"}
// let obj2 = {lname: "Azmi"}

// let newObj = Object.assign({}, obj1, obj2)

// console.log("obj1", obj1) //Result: {fname: "Arsalan"}
// console.log("obj2", obj2) //Result: {lname: "Azmi"}
// console.log("newObj", newObj) //Result: {fname: "Arsalan", lname: "Azmi"}

/************************************************** */

// let obj1 = {
//     fname: "Arsalan",
//     lname: "Azmi",
//     degres: 2
// }
// let obj2 = {
//     city: "Karachi",
//     country: "Pakistan",
//     gender: "male"
// }

// let obj3 = {
//     fname: "Inam",
//     lname: "Khan",
//     profession: "Web Developer"
// }
        
// let newObject = Object.assign({},obj1,obj2,obj3);

// console.log("obj1", obj1); //Result: {fname: "Arsalan", lname: "Azmi", degres: 2}
// console.log("obj2", obj2); //Result: {city: "Karachi", country: "Pakistan", gender: "male"}
// console.log("obj3", obj3); //Result: {fname: "Inam", lname: "Khan", profession: "Web Developer"}
        
// console.log("newObject", newObject); //Result: {fname: "Inam", lname: "Khan", degres: 2, city: "Karachi", country: "Pakistan", …}

/************************************************** */

let obj1 = {
    fname: "Arsalan",
    lname: "Azmi",
    degres: 2
}
let obj2 = {
    city: "Karachi",
    country: "Pakistan",
    gender: "male"
}

let obj3 = {
    fname: "Inam",
    lname: "Khan",
    profession: "Web Developer"
}

let newObject = Object.assign(obj1,obj2,obj3);
console.log("obj1", obj1); 
//Result: {fname: "Inam", lname: "Khan", degres: 2, city: "Karachi", country: "Pakistan", …}
console.log("obj2", obj2);
//Result: {city: "Karachi", country: "Pakistan", gender: "male"}
console.log("obj3", obj3);
//Result: {fname: "Inam", lname: "Khan", profession: "Web Developer"}
console.log(newObject);
//Result: {fname: "Inam", lname: "Khan", degres: 2, city: "Karachi", country: "Pakistan", …}