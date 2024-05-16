var n=15;
for(var i=0;i <= n; i++)
{
    if(i%3 ===0 && i%5 === 0 )
        {
            console.log("FiggBuzz");
        }
     else if(i%3 === 0)
        {
                    console.log("Figg");
        }
     else if(i%5 === 0 )
        {
        console.log("Buzz");
        }
      else
        {
        console.log(i);
     }
}