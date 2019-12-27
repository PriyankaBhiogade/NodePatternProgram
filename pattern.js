let read = require("readline-sync");
let pinCode = read.question("Enter your pin code : ");
let emailPattern = read.question("Enter your Email : ");

function checkPinCode(pinCode){
let pinCodeRegex = RegExp('^[0-9]{3} [0-9]{3}$')
let pinCodeCheck = pinCodeRegex.test(pinCode);
if(pinCodeCheck == true)
	console.log(pinCode ,"is Valid Pin Code");
else
        console.log(pinCode ,"is Invalid Pin Code");

}

function checkEmail(emailPattern){
let emailRegex = RegExp('[a-zA-Z0-9]([_,+,-,.]{0,1}[a-zA-Z0-9])*[@]{1}[a-zA-Z0-9]{1,}[.]{1}[a-zA-Z]{2,3}([.]{1}[a-zA-Z]{2,3}){0,1}$');
let emailCheck = emailRegex.test(emailPattern);
if(emailCheck == true)
        console.log(emailPattern ,"is Valid Email ");
else
        console.log(emailPattern ,"is Invalid Email ");

}

checkPinCode(pinCode);
checkEmail(emailPattern);
