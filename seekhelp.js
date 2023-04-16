var seekimgtag=document.getElementById('seekimg');
seekimgtag.src='download.jpeg';
var x=0;
if (window.innerWidth<'600px'){
   seekimgtag.style.width = '100%';
   seekimgtag.style.height = '300px';
}
else{
   seekimgtag.style.width = '100%';
   seekimgtag.style.height = '600px';
}
   var x=5;
   function seekpage(){
      x=x-1;
      if(x==4){
         seekimgtag.src='download.jpeg';
      }

      else if(x==3){
         seekimgtag.src='cycle.webp';
      }
      else if(x==2){
         seekimgtag.src='ragg.webp';
      }
      else if(x==1){
         seekimgtag.src='help.jpeg';
      }
      else{
         seekimgtag.src='download.jpeg';x=5;
      }

   }
   setInterval(seekpage,2000);
  
   var addcycle=document.getElementById('addcyc');
   addcycle.addEventListener('click',function(){
      var addstat=document.getElementById('todo12');
      var cycstatus=document.getElementById('cyclestatus').value;
      
 if(cycstatus!=""){
   x++;
   var cyclist=document.createElement('li');
      cyclist.id='cyc';
      cyclist.appendChild(document.createTextNode(cycstatus));
addstat.appendChild(cyclist);
document.getElementById('cyclestatus').value='';
 }
 else{
 console.log(alert("No Status"));
   }
 }

 )
   var removing=document.getElementById('remcyc');
   removing.addEventListener('click',function(){
       var remstat=document.getElementById('todo12');

      var child = document.getElementById("cyc");
      remstat.removeChild(remstat.lastElementChild);
   })
   var removing1=document.getElementById('remcyc1');
   removing1.addEventListener('click',function(){
       var remstat1=document.getElementById('todo12');

      var child1 = document.getElementById("cyc");
      remstat1.removeChild(child1);
   })
   var sbtn=document.getElementById('subnm');
   sbtn.addEventListener('click',function(){
      var pname=document.getElementById('contname').value;
   var continfo1=document.getElementById('continfo').value;
   
      if(pname==""){
         console.log(alert("Please enter valid mail"));
      }
      else if(continfo1.length!=10){
         console.log(alert("Not a valid contact number enter your number in prompt"))
         var nnumber=prompt();
         document.getElementById('continfo').value=nnumber;
      }
      else{
         console.log(alert("Everythind seems ok Thank you your response has been recorded we will contact you soon"));
      }
      document.getElementById('contname').value='';
   })
   
   

