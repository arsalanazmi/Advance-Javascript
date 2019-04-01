function disp2(a){
    return function(b){
        return a + b;
    };
}

var abc = disp2(10);
console.log(abc(20));

// RESULT:
// 30