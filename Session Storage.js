sessionStorage.setItem("name","Arsalan");
sessionStorage.setItem("username","arsalan92");
sessionStorage.setItem("degree","1");

console.log(sessionStorage.getItem("degree"));
console.log(sessionStorage.key(1));

sessionStorage.removeItem("username");

sessionStorage.clear();

sessionStorage.setItem("name","Inam");
sessionStorage.setItem("profession","Web Developer");

console.log(sessionStorage.length);