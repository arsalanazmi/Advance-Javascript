function disp(name1, name2) {
    arguments[0] = "Welcome ";
    
    console.log(name1 + arguments[1]);
    console.log(arguments.length);
    
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    console.log(arguments.callee);
}
disp("Hello", "World" , 90);

// RESULT
// Welcome World
// 3
// Welcome
// World
// 90
