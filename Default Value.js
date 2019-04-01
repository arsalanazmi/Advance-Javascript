function welcomeMsg(name) {
    let msg = `Welcome ${name}`;
    console.log(msg);
}
welcomeMsg("Arsalan"); //Result: Welcome Arsalan
welcomeMsg(); //Result: Welcome undefined

/************************************************** */

function createIceCream({scoops=1, toopings=['Dark Chocolate']}) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops'; 
    console.log(`Your sundae has ${scoops} ${scoopText} with ${toopings.join(' and ')} toopings.`) 
}

createIceCream({});
createIceCream({scoops:2});
createIceCream({scoops:2, toopings:['Sprinkles', 'Smarties'] });
createIceCream({toopings:["Strawberry"]});

// RESULT:
// Your sundae has 1 scoop with Dark Chocolate toopings.
// Your sundae has 2 scoops with Dark Chocolate toopings.
// Your sundae has 2 scoops with Sprinkles and Smarties toopings.
// Your sundae has 1 scoop with Strawberry toopings.

/************************************************** */

function createIceCream1(scoops=1, toopings=['Dark Chocolate']) {
    const scoopText = scoops === 1 ? 'scoop' : 'scoops'; 
    console.log(`Your sundae has ${scoops} ${scoopText} with ${toopings.join(' and ')} toopings.`) 
}
createIceCream1();

// RESULT:
// Your sundae has 1 scoop with Dark Chocolate toopings.