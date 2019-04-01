let gender = prompt("Enter Your Gender");

let msg = (gender === "male") && "&& Short Circuit";
console.log(msg);

msg = (gender === "female") || "|| Short Cirsuit";
console.log(msg);