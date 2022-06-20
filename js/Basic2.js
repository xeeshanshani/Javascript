console.log('Basic 2');
// Global Variables
var name = 'Zeeshan';
var age = 27;
var isApproved = true;
console.log(name);
console.log(age);
console.log(isApproved);

// Rules for naming variables
// 1. Variable names can only contain letters, numbers, $ and _
// 2. Variable names are case sensitive
// 3. Variable names should not be JS keywords
// 4. Variable names should be meaningful
// 5. Variable names should be descriptive
// 6. Variable names should not be too long
// 7. Variable names should not be too short
// 8. Variable names should not be all numbers
// 9. Variable names should not be all capital letters
// 10. Variable names should not be all lower case letters
// 11. Variable names should not start with a number
// Mostly used const and let
//const name = 'Zeeshan';
console.log(name);
name = 'Zeeshan';
console.log(name);

//block level scope
{
let age = 27;
age= 29;
console.log(age);
}
console.log(age);
// arrays
const numbers = [1,2,3,4,5];
numbers.push(6);
console.log(numbers);
// if you used const in array you can't change the value of the array
//numbers = [1,2,3,4,5];
// Most common programming case types
// 1. camelCase - myVariable
// 2. PascalCase - MyVariable
// 3. snake_case - my_variable
// 4. kebab-case - my-variable
