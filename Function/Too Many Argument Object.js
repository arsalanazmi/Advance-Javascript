function add(a, b) {
    document.write("A: " + a + "<br>");
    document.write("B: " + b + "<br>");
    document.write("C: " + arguments[2] + "<br>");
    document.write("D: " + arguments[3] + "<br>");
}
add(10, 20, 30, 40);

// Result:
// A: 10
// B: 20
// C: 30
// D: 40