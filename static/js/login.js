function dosubmit()
{
	var uname= document.getElementById("uname").value; 
	var pass= document.getElementById("pass").value;   
	var res=true;
	if(uname=="")
    {
        var er=document.getElementById("userror");
        er.innerHTML="Please Enter the Username";
        er.style.display="block";
		res=false;
	}
	if(pass=="")
	{
		var er=document.getElementById("pserror");
        er.innerHTML="Please Enter the password";
        er.style.display="block";
		res=false;
	}
	return res;
}

function onl()
{
    document.getElementById("bd").style.display="block";
	console.log("load complete");
	var x = document.getElementById("form1").formEnctype;
	x="application/x-www-form-urlencoded";
}