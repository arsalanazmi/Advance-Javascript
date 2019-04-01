/************************************************** */
// Try any part one at a time

        // const anyFunction = () => {
        //     return (((Math.floor(Math.random() * 10)) % 2) === 0) ? true : false 
        // }

        // const resolveFunction = () => console.log("Success");
        // const rejectFunction = () => console.log("Failure");

        // const result = new Promise( (res, rej) => {
        //     setTimeout( () => (anyFunction() ?  res() : rej() ), 
        //      2000)});

        // result.then(resolveFunction).catch(rejectFunction)
        // console.log("Hello World");

/*********************************************** */

const anyFunction = () => {
    const value = (Math.floor(Math.random() * 10) % 2 )
    console.log(value);
    
    return (value === 0) ? true :false
}

const resolveFunction = () => console.log("Succes");
const rejectFunction= () => console.log("Failure");

const result = new Promise ((res, rej) => {
    setTimeout( () => (anyFunction() ? res() : rej() ), 2000)
})

const resultFromNewPromise = () => new Promise((res,rej) => {
    console.log("Second Promise");
    setTimeout(() => (anyFunction() ? res() : rej()),2000)
})

result.then(resultFromNewPromise).then(resolveFunction).catch(rejectFunction)
console.log("Hello World");