const arr = ["Zia Khan", "Irfan", "Rizwan", "ALi", "Asif", "Muneeb"]
const newArr = arr.filter(value => value.length >= 5)
console.log(arr); 
console.log(newArr);

//RESULT:
// ["Zia Khan", "Irfan", "Rizwan", "ALi", "Asif", "Muneeb"]
// ["Zia Khan", "Irfan", "Rizwan", "Muneeb"]