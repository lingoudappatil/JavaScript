function getData(dataId,getNextData)
{
    return promise=new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            console.log("data",dataId);
            resolve("successfully");
            if(getNextData)
            {
                getNextData();
            }
        },2000);
    });
}
getData(1,()=>
{
    console.log("Getting Data2....");
    getData(2,()=>
{
    console.log("Getting Data3....");
    getData(3);
});
});
