
function FindElement(arr,value)
{
        for(var i= 0;i<arr.length;i++)
            {
                if(arr[i] === value)
                {
                    console.log("true");
                }
            }
        return false; 
}
var a = [1,2,5,2,6];
console.log(FindElement(a,10));