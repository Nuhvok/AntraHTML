let nameArray = ['James', 'Bernie'];
console.log(nameArray[0] + ', '  + nameArray[1]);

nameArray.push('Robert');
console.log(nameArray[0] + ', '  + nameArray[1] + ', '  + nameArray[2]);

if((nameArray.length % 2) != 0)
{
   nameArray[Math.floor(nameArray.length / 2)] = 'Calvin';
}
console.log(nameArray[0] + ', '  + nameArray[1] + ', '  + nameArray[2]);

nameArray.shift();
console.log(nameArray[0] + ', '  + nameArray[1]);

nameArray.unshift('Regal');
nameArray.unshift('Rose');
console.log(nameArray[0] + ', '  + nameArray[1] + ', '  + nameArray[2] + ', '  + nameArray[3]);