function validate(){
    var fstname=document.getElementById("fstname");
    var lstname=document.getElementById("lstname");
    var batch=document.getElementById("batch");
    var pass1=document.getElementById("pass1");
    var pass2=document.getElementById("pass2");
    var sub=document.getElementById("sub");
    var res=true;

    if(fstname.value==""||lstname.value==""){
        var userr=document.getElementById("userr");
        userr.innerHTML='^ User name is empty'
        userr.style.display="block";
        res=false;
    }
    if(pass1.value==""){
        var pserr=document.getElementById("pserr1");
        pserr.innerHTML="^ Password is empty";
        pserr.style.display="block";
        res=false;
    }
    else if(pass1.value.length<=8||pass2.value.length<=8){
        var pserr=document.getElementById("pserr1");
        pserr.innerHTML="^ Password is less than 8 charactor";
        pserr.style.display="block";
        res=false;
    }
    else if(!isNaN(pass1.value)||!isNaN(pass2.value)){
        var pserr=document.getElementById("pserr1");
        pserr.innerHTML="^ Use alphapets in password";
        pserr.style.display="block";
        res=false;
    }
    else if(pass1.value!==pass2.value)
    {
        var pserr=document.getElementById("pserr1");
        pserr.innerHTML="^ Password does not match";
        pserr.style.display="block";
        res=false;
    }
    
    return res;
}