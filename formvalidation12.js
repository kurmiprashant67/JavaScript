
                        

function validate(){

    let name = document.querySelector('#name').value 
    let age = document.querySelector('#age').value 
    let Contact = document.querySelector('#Contact').value
    let gmail = document.querySelector('#gmail').value


    let pass = document.querySelector('#password').value
    let cpass = document.querySelector('#cpassword').value


if(name==""){
    alert("Please fill your name")
    document.querySelector('#name').focus()
    return false 
}

else if(isNaN(age)){
    alert("Please fill age in numbar ")
    document.querySelector('#age').focus()
    return false
}

else if(isNaN(Contact)){
    alert("Please fill Contact in numbar ")
    document.querySelector('#Contact').focus()
    return false
}
else if(Contact>10 || Contact<10){
    alert("invalid numbar , please check your numbar")
    return false

}
else if( !(gmail,includes('@gmail.com'))){
    alert("Please fill gmail in numbar ")
    document.querySelector('#gmail').focus()
    return false
}



else if( !(pass.match(/[~!@#$%^&*]/)) ){
    alert("Please enter one special char")
    document.querySelector('#password').focus()
    return false
}

else if(pass!=cpass){
    alert("reenter password")
     document.querySelector('#password').focus()
     return false
}


}









