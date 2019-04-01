/************************************************** */     
// Try any part one at a time

const newSet = new Set(["Arsalan","Raza","Azmi","Raza"]);
console.log(newSet); //RESULT: {"Arsalan", "Raza", "Azmi"}

/************************************************** */

const newSet1 = new Set();
console.log(newSet1); //RESULT: {}

newSet1.add("Arsalan");
newSet1.add("Raza");
newSet1.add("Azmi");
newSet1.add("Raza");

console.log(newSet1); //RESULT: {"Arsalan", "Raza", "Azmi"}

newSet1.delete("Raza")

newSet1.add("Azmi");
console.log(newSet1); //RESULT: {"Arsalan", "Raza"}

/************************************************** */
const newSet2 = new Set();
console.log(newSet2); //RESULT: {}

newSet2.add("Arsalan");
newSet2.add("Raza");
newSet2.add("Azmi");
newSet2.add("Azmi");

console.log(newSet2); //RESULT: {"Arsalan", "Raza", "Azmi"}

for (i of newSet2) {
    console.log(i);   
}

//RESULT: 
// Arsalan
// Raza
// Azmi