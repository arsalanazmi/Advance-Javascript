function show(a, ...args) {
    console.log(a);
    console.log(args);
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    console.log(args[3]);
}
show(10, 20, 30, 40, 50);

// RESULT:
// 10
// [20, 30, 40, 50]
// 20
// 30
// 40
// 50