//This is first program of javaScript i Asynchronous //
function msg()
{
    console.log("This is first program for Asynchronous so, this will print after 3 seconds");
}
setTimeout(msg,3000);

setTimeout(() => {
    console.log("This will  print after above function executed");
    
}, 
4000);