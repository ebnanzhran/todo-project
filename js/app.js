
function myFunction() {
  alert("Thank You");
}
var userName=prompt("Enter your name");
var gander = prompt("Enter your Gander");

var userAge =prompt("Enter your Age");
if(userAge<=0){
  prompt("Your Age should be over than Zero");
}
var userAnswer=confirm("Are you need see Welcoming message");
if(userAnswer==true){
  if (gander.toLowerCase() == "mail")
{
  alert("Mr."+userName+"\n"+"Your Gander: "+gander+"\n");
}
else if(gander.toLowerCase()=="fmail"){
  
    alert("Ms."+userName+"\n"+"Your Gander: "+gander+"\n");
  
}
else{
  alert(userName+"\n");
}


}