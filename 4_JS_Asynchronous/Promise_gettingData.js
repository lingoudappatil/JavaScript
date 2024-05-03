//Promises Example  on getting data
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
        },5000);
    }); 
}
getData(1);
getData(2);