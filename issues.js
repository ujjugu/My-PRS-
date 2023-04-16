
var x=0;
function addlists(){
	x++;
	var button=document.getElementById('bts');
	var input=document.getElementById('inputissues').value;
	if(input!=""){
		var todo=document.getElementById('todo1');
	console.log(input);
	var newli=document.createElement('li');
	newli.id='list'
	console.log(newli);
	todo.appendChild(newli);
    newli.appendChild(document.createTextNode(input));
  document.getElementById('inputissues').value="";
	}
	else{
		console.log(alert("Sorry no issues added to portal."))
	}
}
function checker(){
	if(x==0){
		console.log(alert("Sorry no issues added to portal."))
	}
	else{
		console.log(alert("Your issues has been updated"));
	}
}
  var removing=document.getElementById('bts1');
   removing.addEventListener('click',function(){
       var remstat=document.getElementById('todo1');

      var child = document.getElementById("list");
      remstat.removeChild(remstat.lastElementChild);
   })
   var removing1=document.getElementById('bts2');
   removing1.addEventListener('click',function(){
       var remstat1=document.getElementById('todo1');

      var child1 = document.getElementById("list");
      remstat1.removeChild(child1);
   })