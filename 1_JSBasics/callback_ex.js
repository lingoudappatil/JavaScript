function Sum(a,b)
{
    console.log(a+b);
}
function cal(a,b,sumcall)
{
    sumcall(a,b);   
}
cal(1,2,Sum);

//aaaa
const sum1=(a,b)=>
{
    return a+b;
}
const cal1=(a,b,sumcal) =>
{
    return sumcal(a,b);
}

resu = cal1(2,5,sum1);
console.log(resu);
