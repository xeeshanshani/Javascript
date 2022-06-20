// Type conversions and type correction
console.log(typeof(1));
console.log('Zeeshan');
let name = 'Zeeshan';
name = String(name);
console.log(typeof(name));
// Type conversion
let num = 1;
let str = String(num);
console.log(typeof(str));
console.log(typeof(num));

let date = String(new Date());
console.log(date,(typeof(date)));

// Array to string ... Applying string function to array
let arr = [1,2,3,4,5];
let str1 = arr.toString();
console.log(str1,(typeof(str1)));
console.log(arr.length,(typeof(arr)));

let i= 15;
console.log(i.toString(),typeof(i));

let a = Number("1465456");
stri = Number("414664D");
//stri = Number(false);
console.log(a,stri);

// Dot to Fixed Function
let num1 = 12.544;
console.log(num1.toFixed(10));

// Type Coercion  adding two strings or two numbers
let num3 = 12;
let num2 = "12";
console.log(num3  + num2);