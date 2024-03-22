function api()
{
    return new Promise((resolve, reject) =>
    {
        setTimeout(() =>
        {
            console.log("wether Data");
            resolve(200);
        },2000);
    });
}
async function getAllData()
{
    await api();
}