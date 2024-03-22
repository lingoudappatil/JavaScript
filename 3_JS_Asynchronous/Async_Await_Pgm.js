function getData(dataId,getNextData)
{
    return new Promise((resolve,reject) =>
    {
        setTimeout(()=>
        {
            console.log("Data",dataId);
            resolve("Success");
            if(getNextData)
            {
                getNextData();
            }
        },2000);
    }); 
}
async function getAllData()
{
    console.log("Getting Data1...");
    await getData(1);
    console.log("Getting Data2...");
    await getData(2);
    console.log("Getting Data3...");
    await getData(3);
    console.log("Getting Data4...");
    await getData(4);
}