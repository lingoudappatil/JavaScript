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
        },3000);
    }); 
}
getData(1);
getData(2);
getData(3);
getData(4);
