var a;
function inter(){
    a=setInterval(autore,1500)
}
function msgupdate(){
    var mesto=document.getElementById("chatbd");
    var mesfrm=document.getElementById("messIn").value;
    
    if (!mesfrm=="")
    {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.status!=200 && this.status!=0)
        {
        clearInterval(a)
        }

        if (this.readyState == 4 && this.status == 200) {
            var temp= xhttp.responseText;
            var t = document.createTextNode(temp);
            var sp2=document.createElement("SPAN");
            pre=document.createElement("PRE")
            pre.setAttribute("class","cter")
            pre.appendChild(document.createTextNode(document.cookie.split(';')[0].toString().substr(6)))
            sp2.appendChild(pre)
            sp2.appendChild(document.createElement("BR"))
            pre2=document.createElement("PRE")
            pre2.appendChild(t)
            pre2.setAttribute("class","ctmsg")
            sp2.appendChild(pre2)
            sp2.setAttribute("class","b");
            var para = document.createElement("PRE");
            para.appendChild(sp2);
            mesto.appendChild(para);
            document.getElementById("messIn").value="";
            document.getElementById("tnu").value=xhttp.getResponseHeader('count');
            
        }
    };
    xhttp.open("POST", "./chat", true );
    xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    document.getElementById("tnu").value=xhttp.getResponseHeader('count');
    xhttp.send("subm="+"s"+"&mes="+mesfrm+"&count="+document.getElementById("tnu").value);
    }
}

function autore()
{
    
    var mesto=document.getElementById("chatbd");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.status!=200 && this.status!=0)
        {
            clearInterval(a)
        }
        
        if (this.readyState == 4 && this.status == 200) {
            para= xhttp.responseText;
            if(para!="")
            {    
            mesto.innerHTML=mesto.innerHTML+para
            document.getElementById("tnu").value=xhttp.getResponseHeader('count');
            

            }
        }
        
    };
    xhttp.open("POST", "./chat", true );
    xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhttp.send("subm="+"n"+"&mes="+"u"+"&count="+document.getElementById("tnu").value);
}




