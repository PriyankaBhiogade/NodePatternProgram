let read = require("readline-sync");
let pinCode = read.question("Enter your pin code : ");

function checkPinCode(pinCode){
let pinCodeRegex = RegExp('^[0-9]{3} [0-9]{3}$')
let pinCodeCheck = pinCodeRegex.test(pinCode);
if(pinCodeCheck == true)
	console.log(pinCode ,"is Valid Pin Code");
else
        console.log(pinCode ,"is Invalid Pin Code");

}
checkPinCode(pinCode);
