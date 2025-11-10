/* array -> array is a collectin  of multityp of data in In a single varival,   in js
  [], ordered (indexing )--------> indexing==>Address/ position of element; 



===============================================================================================================
let ar = ["ABC", 89 , "BPL", 5.9 , "India"]
//console.log(ar[4]);
for(let vl = 0; vl<5; vl++){ 
    console.log(ar[vl])
}

==================================================================================================================
input frome user to get data 


let ar=[]
for(let a=0; a<5; a++){
  ar[a]=prompt("Enter Element ")
}
console.log(ar);
=====================================================================================================================
add array element,

let ar = [1,2,3,4,5,6,7,8,9,10]
let sum=0
for(let a=0; a<10; a++){
sum = sum +ar[a]
}
console.log(sum);
=================================================================================================

wap to take 10 elements int input from the user and print the Squre of all even number in an array;

let ar=[]


for(let a=0; a<10; a++){
  ar[a]=prompt("Enter Element ")
     
  }
  for( let a=0; a<10; a++){
    if(ar[a]%2!=0){
      console.log(ar[a]*ar[a]);
      
    }
  }


====================================================================================================
// wap to take 10 elemment int input frome the user the user and print the sum of all odds numbar in the array;

*/