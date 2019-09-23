function msgupdate(){
    var mesto=document.getElementById("chatbd");
    var mesfrm=document.getElementById("messIn").value;
    
    var sp1 = document.createElement("SPAN");
    sp1.appendChild(document.createTextNode(" "));
    
    
    
    if (!mesfrm=="")
    {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var temp= xhttp.responseText;
            var t = document.createTextNode(temp);
            var sp2=document.createElement("SPAN");
            sp2.appendChild(t)
            sp2.setAttribute("class","b");
            var para = document.createElement("PRE");
            para.appendChild(sp1);
            para.appendChild(sp2);
            mesto.appendChild(para);
            document.getElementById("messIn").value="";
        }
    };
    xhttp.open("POST", "./chat", true );
    xhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded")
    xhttp.send("mes="+mesfrm);
    console.log("mes="+mesfrm);
    }

}

function autore()
{
    if(EventSource!=="undefined")
        {
    var source = new EventSource("/chat");
	source.onmessage = function(event) {
			var sp1 = document.createElement("SPAN");
			sp1.appendChild(document.createTextNode(" "));
			var temp= event.data;
            var t = document.createTextNode(temp);
            var sp2=document.createElement("SPAN");
            sp2.appendChild(t)
            sp1.setAttribute("class","a")
            sp2.setAttribute("class","b");
            var para = document.createElement("PRE");
            para.appendChild(sp1);
            para.appendChild(sp2);
            mesto.appendChild(para);

}
};
}