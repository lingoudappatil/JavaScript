// Simple CallBack Function
function sum(a,b)
{
    console.log("This is simple callback function");
    console.log(a+b);
}
function calculator(a,b,sum)
{
    sum(a,b);
}
calculator(2,3,sum);

// callback in Async
const hello = () =>
{
    console.log("This is CallBack Function in Asynchronous");
};
setTimeout(hello,3000)