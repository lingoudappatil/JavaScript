function SumArr(ar)
{
    sum=0;
    for(var i=0;i<+ar.length;i++)
    {
        sum += ar[i];

    }
    return sum;
}
let array = [2,5,3,4,8];
console.log(SumArr(array));