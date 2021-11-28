function truncate(str, maxLength)
{
   if(str.length > maxLength)
   {
      str = str.substring(0, maxLength - 1);
      return str + "\u2026";
      
   }
   else
   {
      return str;
   }
}

let str = "This is a long string.";
console.log(truncate(str, 5));