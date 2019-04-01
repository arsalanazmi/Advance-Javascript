const teachers = ['Zia Khan', 'Irfan', 'Muneeb', 'Aamir']
const titles = teachers.map( name => 'Mr. ' + name ) 
console.log(titles); //RESULT: ["Mr. Zia Khan", "Mr. Irfan", "Mr. Muneeb", "Mr. Aamir"]

//***********************************************************

const teachers1 = ["Zia khan", "Irfan Ali", "Muneeb", "Aamir"]
const newArray = teachers1.map(value => {
 console.log(value); 
});

 //RESULT:
 // Zia khan
 // Irfan Ali
 // Muneeb
 // Aamir

//***********************************************************

const arr = [10,20,30,40,50];
const newArr = arr.map(value => {
 value++;
 console.log(value);  
 return value;
})
console.log(arr); //RESULT: [10, 20, 30, 40, 50]
console.log(newArr); //RESULT: [11, 21, 31, 41, 51]

//***********************************************************

const teachers2 = ["Zia khan", "Irfan Ali", "Muneeb", "Aamir"]
const newArray2 = teachers2.map((value,i) => {
 console.log(i + " : Mr." + value);  
});

//    RESULT:
//    0 : Mr.Zia khan
//    1 : Mr.Irfan Ali
//    2 : Mr.Muneeb
//    3 : Mr.Aamir

//***********************************************************
var arr1 = [
 {price:100, product: "Mobile"},
 {price:200, product: "Laptop"},
 {price:300, product: "Tablet"},
 {price:400, product: "Pc"},
]
var newArr1 = arr1.map(value => value.product );
console.log(newArr1); 

//RESULT: ["Mobile", "Laptop", "Tablet", "Pc"]