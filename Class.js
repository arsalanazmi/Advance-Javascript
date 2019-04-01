class msg{
    static flag = "Pakistan"

    constructor(name1,name2){
        this.flag = false
        this.fname = name1
        this.lname = name2
    }

    printMsg(){
        console.log(`Welcome ${this.fname} ${this.lname} ${this.flag}` )
        this.flag = true;
        console.log(`Welcome ${this.fname} ${this.lname} ${this.flag}` );
    }
} 

let abc = new msg ("Arsalan","Azmi");
let xyz = new msg ("Inam", "Khan");

abc.printMsg();
//Result: 
//Welcome Arsalan Azmi false
// Welcome Arsalan Azmi true
xyz.printMsg();
//Result: 
// Welcome Inam Khan false
// Welcome Inam Khan true

console.log(msg.flag,abc.flag); //Result: Pakistan true
console.log(msg.fname,msg.lname); //Result: undefined undefined

msg.fname = "Afridi"
console.log(msg.fname, abc.fname); //Result: Afridi Arsalan



class newMsg extends msg {
    constructor(fname,lname,city,country){
        super(fname,lname)
        this.city = city
        this.country = country
    }

    printNewMsg() {
        console.log(`Welcome ${this.fname} ${this.lname} & ${this.city} ${this.country}`);
    }
}

const newAbc = new newMsg("Zia", "Khan", "Karachi", "Pakistan");

newAbc.printMsg(); 
//Result: 
// Welcome Zia Khan false
// Welcome Zia Khan true
newAbc.printNewMsg();
//Result: 
// Welcome Zia Khan & Karachi Pakistan