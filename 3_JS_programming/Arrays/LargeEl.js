
var array = [2,9,8,3,9,6];
var largest = array[0];
if(array.length === 0)
{
        return null;
}
 for(var i=0;i<=array.length;i++)
{
  if(array[i] > largest)
  {
    largest = array[i]; 
  }
}
console.log("largest is " + largest);
