function FindElement(arr,value)
{
    if(arr.length === 0)
        {
            return null;
        }
        for(var i= 0;i<=arr.length;i++)
            {
                if(arr[i] === value);
                {
                    return true;
                }
                else {
                    console.log("False")

                }
            }
}

var a = [1,2,5,2,6];
console.log(FindElement(a,9));