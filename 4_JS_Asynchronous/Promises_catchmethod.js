// Example using catch() method in Promises
const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("I am ASHOK Promise");
        reject("Error occurred");
    });
};
let promise = getPromise();
promise.catch((err) => {
    console.log("Promise Rejected");
});
