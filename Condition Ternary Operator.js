let gender = prompt("Enter Your gender");

if (gender === "Male"){
    console.log("Color is Blue");
}
else{
    console.log("Color is Pink");
}


// Above if condition can be written in one line as following
gender === "Male" ? console.log("Color is Blue") : console.log("Color is Pink");


// Above ternary operator can be written as follows        
gender === "Male"
   ? console.log("Color is Blue")
   : console.log("Color is Pink")


// Above ternary operator can be written as follows
gender === "Male"
   ? console.log("Color is Blue")
   : gender === "Female"
       ? console.log("Color is Pink")
       : console.log("Color is Purple");