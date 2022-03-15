// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// we create the variable 'name' and we set the variable as 'Dane'.
// we check if the 'name' is set to 'Mary'. 'name' does not set to 'Mary' so we console log the script 'How do you do?'.
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create the variable 'secret'.
// we create the variable 'code' and set it to the number 123.
// we check if the variable 'code' is set to 123. code=123 so we set the variable 'secret' to 'super' and multiply the value of 'code' by 2. 'code' is now set to 246.
// we check if the value of 'code' is greater than 250. 246 is less than 250 so 'secret' is set to 'duper'
// we console.log 'secret' and it prints 'duper' in the console

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we create the variable 'isStudent' and set it to the number true.
// we create the variable 'age' and set it to 34
// we create the variable 'zip' and set it to 55407
// we check if 'isStudent' is true and if 'zip' is greater than 80000. 'isStudent' is true but 'zip' is less than 80000,
// so we check if 'isStudent' is false and if 'age' is less than 30. 'isStudent' is true and 'age' is greater than 30,
// so we check if 'isStudent' is true. It is so we console log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//FIX colorOne should be 'blue' and colorTwo should be 'red'
//let colorOne = 'blue'
//let colorTwo = 'red'

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX if mix is true colorOne and colorTwo should both be set to purple.
//if (mix === true) {
// colorOne = 'purple';
// colorTwo = 'purple';
// }

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
//Fix time should be a variable not a constant
//let time = 4;
const time = 4;

//Fix to apply two conditions you use && not ||
// if (temp > 39 && time >=4) {
//  console.log('throw away the food!');
//}

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
//Fix time should be a variable not a constant
//let minAge = 21;
const minAge = 21;

//Fix to check if age is greater than or equal to minAge we need to type
//if(age >= minAge)
//we also need to change the script in the console.log to 'enter' and remove the else code
//if(age >= minAge) {
//console.log('enter)
//}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/


