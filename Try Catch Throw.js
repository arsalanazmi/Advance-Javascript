try{
    alet("Hello World");
}
catch(err) {
     console.log("There is some problem " + err);
}
//RESULT: There is some problem ReferenceError: alet is not defined

/*********************************************** */

try{
    alet("Hello World");
    console.log("skipped");
}
catch(e){
    console.log("Message " + e.message); //RESULT: Message alet is not defined
    console.log("Name " + e.name); //RESULT: Name ReferenceError
    console.log("Stack " + e.stack); 
    //RESULT: Stack ReferenceError: alet is not defined
}

/*********************************************** */

try{
   // alet("Hello World");
    throw "testing try..catch..throw"
}
catch(err){
    console.log("There is some problem " + err); //RESULT: There is some problem testing try..catch..throw
}