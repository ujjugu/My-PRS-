var str=document.getElementById('inputsfeed').value;



function submission(){
	var str=document.getElementById('inputsfeed').value;
 
 	if(str!=''){
 		console.log(alert("Your feedback has been submitted"));
 	}
 	else{
 		console.log(alert("Sorry! You have not entered any thing"))
 	}
 
}
function sub(){
	var messnumber=document.getElementById('messnum').value;
	var messincharge=document.getElementById('incharge').value;
	var len=messincharge.length;
	if(messnumber>5 || messnumber==0){

	  console.log(alert("Entered Mess number is not Acceptable"));
	  console.log(alert("Enter new Mess number"));

	}
	 if(len==0){
       	console.log(alert("Invalid Incharge"));
       }

       console.log(alert("Submitted"))
}

