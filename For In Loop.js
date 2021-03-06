//Old For Loop
        // const myArray = {
        //     firstName: "Arsalan",
        //     lastName: "Azmi",
        //     degrees: 2
        // }
        // for (let i = 0; i < 3; i++) {  
        //     console.log(myArray[i]); //Result: undefined  
        // }


/************************************************** */
//New "for in" loop on object values

const myArray = {firstName:"Arsalan", lastName:"Azmi", degrees:2}
for (i in myArray) {
    console.log(myArray[i]);
}
// RESULT
// Arsalan
// Azmi
// 2

/************************************************** */
//New "for in" loop on object keys

const myArray1 = {firstName:"Arsalan", lastName:"Azmi", degrees:2}
for (i in myArray1) {
    console.log(i);
}

//RESULT
// firstName
// lastName
// degrees

/************************************************** */
//"For in" loop on array

const digits = ["a","b","c","d","e","f","g","h"];
for (i in digits){
    console.log(digits[i]);
}

//RESULT
// a
// b
// c
// d
// e
// f
// g
// h