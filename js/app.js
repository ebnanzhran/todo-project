
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

function checkcolor() {
  var task1 = document.getElementById("task1");
  var task2 = document.getElementById("task2");
  var task3 = document.getElementById("task3");
  var task4 = document.getElementById("task4");

  var backColor1 = document.getElementById("backColor1");
  var backColor2= document.getElementById("backColor2");
  var backColor3= document.getElementById("backColor3");
  var backColor4= document.getElementById("backColor4");

  if (task1.checked == true ){
    backColor1.style.backgroundColor = "green";
  } else {
    backColor1.style.backgroundColor= "red";
  }

  if (task2.checked == true ){
    backColor2.style.backgroundColor = "green";
  } else {
    backColor2.style.backgroundColor= "red";
  }

  if (task3.checked == true){
    backColor3.style.backgroundColor = "green";
  } else {
    backColor3.style.backgroundColor= "red";
  }

  if (task4.checked == true){
    backColor4.style.backgroundColor = "green";
  } else {
    backColor4.style.backgroundColor= "red";
  }
}
function myFunction3() {
  alert("Thank You");
}