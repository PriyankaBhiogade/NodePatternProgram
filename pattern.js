let read = require("readline-sync");
let pinCode = read.question("Enter your pin code : ");
let pinCodeRegex = RegExp('^[0-9]{6}$')
let pinCodeCheck = pinCodeRegex.test(pinCode);
if(pinCodeCheck == true)
	console.log(pinCode ,"is Valid");
else
        console.log(pinCode ,"is Invalid");

