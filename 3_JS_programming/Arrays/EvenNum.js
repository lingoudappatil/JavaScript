var ar= [2,4,5,9,7,1,0];
var EvenAr =[];
for(var i=0;i<=ar.length;i++)
{
    if(ar[i]%2 ===0)
    {
                console.log("Even Numbers are below\n");
                EvenAr.push(ar[i]);
    }
}
console.log("Array is" +EvenAr);
return EvenAr;