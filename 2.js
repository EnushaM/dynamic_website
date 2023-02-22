function contact() {
	alert("Clicking Button");
    document.getElementById("contact").style.display = "block";

}
function rem() {
	alert("Clicking Button"); 
	document.getElementById("contact").style.display = "none";
}

function changetext(){
	alert("Moving mouse over the text");
	document.getElementById("hi").style.animation="glow 1s ease-in-out infinite alternate";
	document.getElementById("h").style.animation="glow 1s ease-in-out infinite alternate";
	document.getElementById("i").style.animation="glow 1s ease-in-out infinite alternate";
}
function changebg(){	
		alert("Clicking the Car");
		document.getElementById("im").src="Pics/i.png";
}	
function marquee(){
	alert("Clicking the Car")
	var mar=document.getElementById("mar");
	mar.style.textAlign="right";
	mar.style.width="100%"
	mar.style.animation="marquee 20s linear infinite";
}
function display()
{
	alert("On loading the Body Page");
	const modal=document.createElement('div');
	modal.style.position= "fixed"; 
	modal.style.background = "#fff";
	modal.style.display = "block";
	modal.style.position="fixed"; 
	modal.style.zIndex="1"; 
	modal.style.left= "50px";
	modal.style.top="50px";
	modal.style.bottom="50px";
	modal.style.overflow="auto";
	modal.style.right="50px";
	modal.style.textAlign= "center"; 
	document.body.appendChild(modal);
	const close=document.createElement("span");
	close.innerHTML='<i class="fa fa-close"></i>';
	close.style.color="#fff";
	close.style.float="right";
    close.style.fontSize= "28px";
    close.style.fontWeight= "bold";
    close.style.background= "#FFF";
	modal.appendChild(close);
	const img=document.createElement("img");
	img.src ="Pics/Vehicle Sale.gif";
	modal.appendChild(img);
	document.body.appendChild(modal);
	close.onclick = function() 
	{
		modal.style.display = "none";
	}
	window.onclick = function(event) 
	{
		if (event.target == modal)
		{
	    	modal.style.display = "none";
	  	}
	}
}
display();