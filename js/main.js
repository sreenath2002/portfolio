var nameError=document.getElementById("nameError")
var emailError=document.getElementById("emailError")
var phoneError=document.getElementById("phoneError")
var messegeError=document.getElementById("messegeError")
var submitError=document.getElementById("submitError")


function validateName(){
    var Name=document.getElementById("name").value

    if(Name.length==0){
        nameError.innerHTML="name is required"
        return false;
    }
    if(!Name.match(/^[A-Za-z ]+$/)){
    nameError.innerHTML="Write a Fullname"
    return false;}
    nameError.innerHTML="valid";
    return true;
}
function validateEmail(){
    var Email=document.getElementById("email").value
    if(Email.length==0){
        emailError.innerHTML="Email is required"
        return false;
    }
    if(!Email.match(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/)){
        emailError.innerHTML = "email is  invalid";
        return false;
    }
    emailError.innerHTML = "valid";
    return true;


}


function validatePhone(){
    var Phone=document.getElementById("phone").value
    if(Phone.length==0){
        phoneError.innerHTML="Phone is required"
        return false;
    }
    if(Phone.length!=10){
        phoneError.innerHTML="Phone should be 10 digits"
        return false;
    }
    if(!Phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="only digits"
        return false;
    }
    phoneError.innerHTML="Phone is valid"
        return true;
    
}

function validateMessege(){
    var Messege=document.getElementById("messege").value
    var required=30;
    var left=required-Messege.length;
    if(left>0){
        messegeError.innerHTML=left+'more charecters required';
        return false;
    }
    messegeError.innerHTML="messege is valid"
        return true;

}

function validateform(){
    if(!validateName()||!validateEmail()||!validatePhone()||!validateMessege())
    {
        submitError.innerHTML='please complete all Required Fields';
        return false;
    }
}
