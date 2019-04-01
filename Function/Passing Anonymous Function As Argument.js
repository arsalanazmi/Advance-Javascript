function disp1(myFunc) {
    return myFunc();
}
console.log(disp1(function () {
    return "Hello World!";
}));

//    RESULT:
//    Hello World!