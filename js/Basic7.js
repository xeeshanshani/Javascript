// // If Else Statement
// console.log("If Else Statement");
const age = 52;
const drive = true;
//Greater than
if(age > 18)
//Equal to
//if(age == 18)
//Less than
//if(age < 18)
{
    console.log("You are eligible for voting");
}
else if (age === 18)
{
    console.log("You are eligible for voting in pakistan");
}
else if (age !== 18)
{
    console.log("It is unfair to vote");
}
else{
    console.log("You are not eligible for voting");
}

//And Operator
if (age > 18 && drive == true)
{
    console.log("You are eligible for Driving");
}
else 
{
    console.log("You are not eligible for Driving");
}
//Or Operator


// Turnery Operator
console.log(age > 18 ? "You are eligible for voting" : "You are not eligible for voting");

// Switch Statement
console.log("Switch Statement");
switch(age)
{
    case 18:
        console.log("You are eligible for voting");
        break;
    case 19:
        console.log("You are eligible for voting in pakistan");
        break;
    default: console.log("It is unfair to vote");
}