//Callback hell in Fetching the Data
function getData(dataId,getNextData)
{
    setTimeout(()=>{
        console.log("Data",dataId);
        if(getNextData)
        {
            getNextData();
        }
    },2000);
}
getData(1,()=>{
    console.log("Fetching Data2 ......");
    getData(2,()=>{
        console.log("Fetching Data3 ......");
        getData(3,()=>{
            console.log("Fetching Data4 ......");
            getData(4,()=>{
                console.log("Fetching Data5 ......");
                getData(5);
            });
        });
    });

});