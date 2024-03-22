

// Example using then() method in Promises
const getPromise = () => 
{
    return new Promise((resolve, reject) =>
     { // Add parentheses here
        console.log("I am Promise");
        resolve("Success");
    });
};

let promise = getPromise();
promise.then(() =>{
    console.log("Promise Fulfilled");
});
