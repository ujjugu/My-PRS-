var im1=document.getElementById('loadser');
var im2=document.getElementById('loadser1');
var z=6;
function servchanger(){
    
    	im1.width='40vw';
    	im2.width='20vw';
    	im1.height='40vw';
    	im2.height='20vw';
   
    
    	z=z-1;
    	if(z==5){
    		im1.src='h1.jpg';
    		im2.src='h1x.png';
    	}
    	else if(z==4){
    		im1.src='h2.jpg';
    		im2.src='h2x.png';
    	}
    	else if(z==3){
    		im1.src='h3.webp';
    		im2.src='h3x.png';
    	}
    	else if(z==2){
    		im1.src='h4.png';
    		im2.src='h3x.png';
    	}
    	else if(z==1){
    		im1.src='h5.jpeg';
    		im2.src='h4x.png';
    		
    	}
    	else if(z==0){
    		im1.src='h6.jpeg';
    		im2.src='h4x.png';
    		z=6;
    	}

    
}
setInterval(servchanger,1500);





var ch=document.getElementById('contimg');
var y=3;
function loginchanger(){
	if(window.innerWidth<'700px'){
		ch.style.width = '130vw';
    ch.style.height = '100vw';
	}
	else{
		ch.style.width = '75vw';
    ch.style.height = '46vw';
	}
	y=y-1;
	if(y==2){
		ch.src='logins.jpeg'
	}
	else if(y==1){
		ch.src='bc1.jpg'
		y=3;
	}
	else{
		y=3;
	}
}
setInterval(loginchanger,3000);




var pro=document.getElementById('proced');
pro.addEventListener('click',function(){
	var inp=document.getElementById('inp1').value;
if(inp==""){
	console.log(alert("Sorry yoy cant proceed please enter username if signed in"));
}
else{
	window.location.href="Service-page.html";
}
}
    )
var logh=document.getElementById('logsub');
logh.addEventListener('click',function(){
	var inp1=document.getElementById('inp1').value;
    var inp2=document.getElementById('inp2').value;
    var inp3=document.getElementById('inp3').value;
    if(inp3!="" && inp2!="" && inp1!=""){
    	console.log(alert("You have been successfully signed in"));
    }
    else{
    	console.log(alert("oops there was a problem in signing you"));
    }
    document.getElementById('inp2').value='';
  document.getElementById('inp3').value='';
})


function rate(){
	window.location.href='rate.html';
}
function issue(){
	window.location.href='issues.html';
}
function complain(){
	window.location.href='complain.html';
}
function help(){
	window.location.href='seekhelp.html';
}
