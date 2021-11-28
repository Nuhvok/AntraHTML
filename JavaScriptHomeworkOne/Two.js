let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj)
{
   for(var i in obj)
   {
      //console.log("inner:" + typeof menu[i]);
      if(typeof obj[i] == "number")
      {
         obj[i] = obj[i] * 2;
      }
   }
}

multiplyNumeric(menu);
for(var i in menu)
{
   console.log("Key: " + i + " Value: " + menu[i]);
}