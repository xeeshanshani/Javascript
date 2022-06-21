console.log("A Synchronous function");
// Asynchronous function here is a function that is not synchronous.
setTimeout(() => {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}, 1000);

console.log("Done Printing");


