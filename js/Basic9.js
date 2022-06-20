// // Function and scope
// function birthday(name,thanks)
// {
//     console.log(`I wish for you every happiness and joy your heart desires as you celebrate your birthday. On your birthday, today, I wish you a year with loads of fun, excitement and beautiful memories. Happy birthday.${"\n"}Happy Birthday, ${name}! I hope you have a great day. ${thanks}`);
//     return 6;
// }

// let name = 'Zeeshan';
// let namee ="Imtanan";

// //birthday(namee,"Thank you");
// // return value
// // let val = birthday(name,"Thank you");
// // console.log(val);

// // Function by expression
// const myobj = {
//     name: 'Zeeshan',
//     game:function(){
//         return("I love a COD4");
//     }
// }
// console.log(myobj.game());
// // Random array
// let arr = ['apple','banana','orange','grapes','mango'];
// arr.forEach(function(item,index){
//     console.log(`${index} - ${item}`);
// }
// );

//Scope of variables
let name = 'Zeeshan';
console.log(name);
function ui(name)
{
    let namee = 'Imtanan';
    return `this is ${namee} ui`;

}
ui(name);