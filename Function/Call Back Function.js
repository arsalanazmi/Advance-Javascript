function show(a) {
    console.log("I am a show Function " + a);
}
function geeky(callback) {
    var a = 10;
    callback(a);
}
geeky(show);

// RESULT:
// I am a show Function 10