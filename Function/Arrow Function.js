// First note the diif. in syntax of Function Expression,Anonymous Function & Arrow Function

/************************************************** */
// Try any part one at a time

//Function Expression
var myFun1 = function disp3(){
    console.log("Hello World!");
};
myFun1();

// RESULT:
// Hello World!

/************************************************** */

//Anonymous Function
var myFun2 = function(){
    console.log("Hello World!");
};
myFun2();

// RESULT:
// Hello World!

/************************************************** */

//Arrow Function
var myFun = () => {
    console.log("Hello World!");
};
myFun();

// RESULT:
// Hello World!


/************************************************** */
/************************************************** */
/************************************************** */


//Arrow Function with parameter
//When there is only one parameter passed then parenthesis "()" are optional
var myfun = a => {
    console.log(a);
};
myfun(10);

// RESULT:
// 10

/************************************************** */

//When there are more than 1 parameter passed then parentheses are compulsory to write
var myfun = (a,b) => {
    console.log(a + " " + b);
};
myfun(10,20);

// RESULT:
// 10 20

/************************************************** */

// When there is only one statement then curly brackets are also optional
// But when there are more then one statements then curly brackets are compulosry.You will not get the error but 
// output may vary.
var myfunct = a => console.log(a);
myfunct(90);

// RESULT:
// 90

/************************************************** */

//Similarly when you want to return a statement you do not need to write return and curly brackets,they are optional.
//if you are avoiding writing return then don't write curly brackets as well, else you will get undefined.
var myfunct1 = (a,b) => a+b;
console.log(myfunct1(90,10));

// RESULT:
// 100
/************************************************** */

//Arrow Function with Default Parameter
var myfun1 = (a,b=20) => {
    console.log(a + " " + b);
};
myfun1(10,30);

// RESULT:
// 10 30

/************************************************** */

//Arrow Function with Rest Parameter
var myfun2 = (a,...args) => {
    console.log(a);
    console.log(args);
};
myfun2(10,20,30,40,50,60,70);

// RESULT:
// 10
// [20, 30, 40, 50, 60, 70]

/************************************************** */

//Comparision Between Function Declaration & Arrow Function
//Function Declaration
function disp4(a,b){
    return a+b;
}
console.log(disp4(30,40));

// RESULT:
// 70
/************************************************** */

//Arrow Function
var xyz = (c,d)=>c+d;
console.log(xyz(20,80));

// RESULT:
// 100
