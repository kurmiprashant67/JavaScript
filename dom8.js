//----------- target with the help of "id"

let res = document.getElementById("main")
console.log(res);



//-------------- target with the help of "teg name"
let head= document.getElementsByTagName('h1')
console.log(head);
head[0].textContent= "Prashant patel"


//-------------- target with the help of "class"

let wraper = document.getElementsByClassName('hello')
console.log(wraper);

wraper[1].textContent = "change from"

//---------------- innerHTML--> for 

let code = document.getElementById('code')
code.innerHTML= "<i> Transform by js </i>"
//---------- apply css 
code.style.backgroundColor = "yellow"
code.style.padding ="20px"

//---------hole css apply
code.style.cssText=" background-color:red; color:white"


// ---------- img change  with the help of js
document.getElementById('name').src="Cheeseburger.jpg"

//enent--> event are a ection, which paform why a user in a web page

function fun(){
    alert("working.......")
}


function change(){
    document.getElementById('text').textContent = "text changed"
}


function Dome(){
   let a= document.getElementById('cool')
a.textContent="Text changed"
  a.style.color="red"
   
}

function Hay(){
   let a= document.getElementById('cool')
   
 a.textContent="Hover"
 a.style.color="black"

   
}
























