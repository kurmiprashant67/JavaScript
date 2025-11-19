function validate(){

    let name = document.querySelector('#name').value 
    let age = document.querySelector('#age').value 
    
    let content = document.querySelector('#contect').value
    let gmail = document.querySelector('#gmail')



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

else if(isNaN(contect)){
    alert("Please fill age in numbar ")
    document.querySelector('#contect').focus()
    return false
}

else if( !(gmail,includes('@gmail.com'))){
    alert("Please fill age in numbar ")
    document.querySelector('#gmail').focus()
    return false
}


}