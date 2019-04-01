localStorage.setItem('username','arsalan.azmi91');
localStorage.setItem('email','arsalan.azmi49@gmail.com');
localStorage.setItem('name','Arsalan Raza Azmi');

console.log(localStorage.getItem('email'));
console.log(localStorage.getItem('name'));

localStorage.removeItem('email');

localStorage.clear();

localStorage.setItem("name","Inam Khan");
localStorage.setItem("profession","Web Development");

console.log(localStorage.key(0));

console.log(localStorage.length);