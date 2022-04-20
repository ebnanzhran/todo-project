var userAnswers=[];

function alertQuis(){
userAnswers.push(confirm("Are tou ready?"));
userAnswers.push(confirm("Are you need learn Java Scrept?"));
userAnswers.push(confirm("Do you have a background in programming?"));
}


var arraySize=userAnswers.length



//Function for check Answer
function conditionsArray(answer,index){
if(answer !=true ||answer !=false){
    userAnswers[index]="invaled"
}

//function for loop to check all answer
}

function loopArray(size){
    for(var i=0;i<size;i++){
      conditionsArray(userAnswers[i],i)
    }

}

function printLoop(){
    for (var i=0 ; i<userAnswers.length;i++){
        console.log(userAnswers[i]);
    }}


alertQuis();

loopArray(arraySize);
userAnswers.toString;

printLoop();
