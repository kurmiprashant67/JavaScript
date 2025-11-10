/* 
           ......user diffine function.............

Syntex:-

function identifer(){

               // code
}

colling 
-------------------------------------------------------------------------


function Demo(){
    console.log("inside the function");
    
}
Demo()
----------------------------------------------------------------------------


//write a progrem adding 2 numbar using function


function Demo(){
    let a=5
    let b=5
    console.log(a+b);
    
}
Demo()
--------------------------------------------------------------------------------------------------
//write a program to take a one int to the user and check numbar ids odd and event

function Demo(){
    let a= parseInt(prompt("enter any numbar "))
    if(a%2!=0){
        console.log(" numbar is odd");
        
    }
    else{
        console.log("numbar is even");
        
    }
}
Demo()
--------------------------------------------------------------------------------------------------
//write a program to print reversh table any numbar to any numbar . to tate a input frome the user

function Demo(){
     let a= parseInt(prompt("enter any numbar "))

   
        
    }
}
Demo()
-----------------------------------------------------------------------------------------------------------------------------
.............. types of user difine fuction...............

   1-> no argument, no return
   
   2-> with argumnnt , no returm  
   3-> with argument, with return                      // return--- keyword
   4-> no argument , and return

    fuction ident       ()---> parametar

           demo(1)---> argument

 -----------------------------------------------------------------
   Q1 ->wap   to add two numbar using function type 1
 
          function Demo(){
            let a= 1;
            let b= 2;
            console.log(a+b);
             }
             Demo()
----------------------------------------------------------------------

    Q2 -> wap to check numbar is even or odd using fucntion typ 2


          function Demo(a){
            
            if(a%2==0){
                console.log("this is even");
                
            }
            else{console.log("This is odd");
            }
          }
          Demo(5)
------------------------------------------------------------------------------


 Q3-> wap to take 1 input from the user and check it is even or odd if the numbar is even then print the sum of all 
      numbar 1-10 and the numbar is odd then print the cube of that numbar using function type 3;
     
 
       function Demo(a){
        let sum=0
        if(a%2==0){
            for(let b=1; b<=10; b++){
               sum= sum+b
                 }
                 return sum;
                }
                 else{
                   return  a= a*a*a;
                   
                 }
       }
       let a=parseInt(prompt("enter any numbar"))
  initi      console.log(Demo(a));
--------------------------------------------------------------------------------
Q4-> wap to create an array inside the function the fuction 25-1  and the print sum all element which present in the array 
    using function type 4;
*/
function D(){
    let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,]

    let sum=0;

    for(let i=0; i<arr.length; i++){
        sum=sum+i;
       
    } return sum;
}
console.log(D());
