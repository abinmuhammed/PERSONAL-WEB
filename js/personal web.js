function ValidateEmail() 
{
    var y = document.getElementById("email").value;
    var len = y.length;
    
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(y))
    {
        document.getElementById("ewarning").innerHTML=""
    }
    else{
        document.getElementById("ewarning").innerHTML="Enter email format correctly"
    }
    if(len==0){
        document.getElementById("ewarning").innerHTML="input an email"
    }
}


function ValidateNumber(){
    var a=document.getElementById("number").value;
    var b=a.length;
    if(b==0){
        document.getElementById("Nwarning").innerHTML="Phone number cannot be empty";
    }
    else if(b>10){
        document.getElementById("Nwarning").innerHTML="Phone number cannot be greater than 10 digit";
    }
    else if(b<10){
        document.getElementById("Nwarning").innerHTML="Phone number cannot be less than 10 digit";
    }
    else{
        if(/^[0-9]+$/.test(a)){
            document.getElementById("Nwarning").innerHTML="";
        }
        else{
            document.getElementById("Nwarning").innerHTML="Please enter number only";
        }
    }
}


function fcheck(){
    var a=document.getElementById("name").value;
    var b=0;
    b=(/\d/.test(a))
    if(b==0){
        document.getElementById("namewarning").innerHTML="";
    }
    else{
        document.getElementById("namewarning").innerHTML="Name do not contain number";
    }
    }


    function fblurcheck(){
        var a=document.getElementById("name").value;
        if(a==""){
            document.getElementById("namewarning").innerHTML="Name cant be empty";
        }
        else{
            if(/^[a-zA-Z]/.test(a) || a.indexOf('')>=0){
                document.getElementById("namewarning")="";
            }
        }
        
    }