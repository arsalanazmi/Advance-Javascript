var name = "Arsalan";

let abc = {
    name: "Raza",

    WelcomeMsg: function() {
        return "Welcome " + this.name 
    },

    WelcomeMsgArrow: () => {
        return "Welcome " + this.name;
    }
}

let msg = abc.WelcomeMsg();
console.log(msg); //Result: Welcome Raza

var msg1 = abc.WelcomeMsg();
console.log(msg1); //Result: Welcome Raza

//Arrow Function has a global scope
msg2 = abc.WelcomeMsgArrow();
console.log(msg2); //Result: Welcome Arsalan

var msg3 = abc.WelcomeMsgArrow();
console.log(msg3); //Result: Welcome Arsalan

let msg4 = abc.WelcomeMsgArrow();
console.log(msg4); //Result: Welcome Arsalan

/************************************************** */

let name1 = "Arsalan"

let abc1 = {
    name1: "Raza",

    WelcomeMsg1: function() {
        return "Welcome " + this.name1 
    },

    WelcomeMsgArrow1: () => {
        return "Welcome " + this.name1;
    }
}

let msg5 = abc1.WelcomeMsg1();
console.log(msg5); //Result: Welcome Raza

var msg6 = abc1.WelcomeMsg1();
console.log(msg6); //Result: Welcome Raza

//Arrow Function has a global scope
msg7 = abc1.WelcomeMsgArrow1();
console.log(msg7); //Result: Welcome undefined

var msg8 = abc1.WelcomeMsgArrow1();
console.log(msg8); //Result: Welcome undefined

let msg9 = abc1.WelcomeMsgArrow1();
console.log(msg9); //Result: Welcome undefined