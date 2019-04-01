var i = "Global Variable";
console.log(i); //RESULT: Error Not Accessible

function show4() {
    var j = "Local Variable of Outer Function";
    console.log(j); //RESULT: Local Variable of Outer Function
    
    function show5() {
        var k = "Local Variable Of Inner Function";
        console.log(j); //RESULT: Local Variable of Outer Function
        console.log(k); //RESULT: Local Variable Of Inner Function
        console.log(i); //RESULT: Global Variable
    }
    show5();
    console.log(j); //RESULT: Local Variable of Outer Function
    // console.log(k); //RESULT: Error Not Accessible
    }
    show4();