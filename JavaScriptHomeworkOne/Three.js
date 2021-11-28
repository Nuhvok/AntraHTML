function checkEmailId(str)
{
   let strArray = str.split("");
   let result = false;
   
   for (let i = 0; i < strArray.length; i++) {
      //console.log(strArray[i]);
      if(strArray[i] == '@')
      {
         //console.log("in First if" + strArray[i]);
         for (let j = i + 2; j < strArray.length; j++)
         {
            //console.log("j: " + strArray[j]);
            if(strArray[j] == '.')
            {
               //console.log("in Second if" + strArray[j]);
               result = true;
            }
         }
      }
   }
   return result;
}

let sampleString = "email@ds.co";
console.log(checkEmailId(sampleString));