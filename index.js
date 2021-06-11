const input = require('readline-sync');
let str = "LaunchCode";


//a) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let newStr = (str.slice(3,10) + str.substr(0,3));
console.log(newStr);
//console.log(str+newStr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log("This text", str ,"is modified to this one", newStr );


//b) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.


//c) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
