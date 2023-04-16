var subment=document.getElementById('subm');
function form1(){
	console.log("hello");
var compname1=document.getElementById('compname').value;
    if(compname1==""){
    	console.log(alert("No name for against"));
    	document.getElementById('compname').value="";

    }
    else{
    	document.getElementById('compname').value="";
    }
}
function checkreason(){
    var reasons=document.getElementById('reason').value;
    var compname1=document.getElementById('compname').value;
    if(reasons==""){
        console.log(alert("No reason Given in field"));
    }
    else if(reason!="" && compname1==""){
        console.log(alert("Soory Please enter the name of complain against"));
    }
    document.getElementById('reason').value='';
}
subment.addEventListener('click',function(){
     var reasons=document.getElementById('reason').value;
    var compname1=document.getElementById('compname').value;
    if(reasons=="" && compname1==""){
        console.log(alert("Invalid Entries"));
    }
});
function form2(){
     var reasons=document.getElementById('reason').value;
    var compname1=document.getElementById('compname').value;
    if(reasons=="" && compname1==""){
        console.log(alert("Invalid Entries"));
    }
    else if(reasons=="" &&compname1!=""){
        console.log(alert("Invalid reason"));

    }
    else if(reasons!="" &&compname1==""){
        console.log(alert("Please enter complain against"));

    }else{
        console.log(alert("Submitted"));
    }
    document.getElementById('reason').value='';
    document.getElementById('compname').value='';
}