//----------Queary Selector----------------

document.querySelector('#head').style.color="red"

document.querySelector('.head2').textContent= "change by js"

document.querySelector('h1').style.color="yellow"



let a=document.querySelectorAll('h2')

console.log(a);
a[3].style.color="red"
a[4].style.color="red"

//-------------------------------------------------------------------------------
/*
---------{CALL BACK FUNCTIOM}--------------------

->FUNCTION ke andar function    
Syntex:-   function ___(function__());



*/
let bnt= document.querySelector('.bnt')
bnt.addEventListener('click',()=>{alert("working")})


