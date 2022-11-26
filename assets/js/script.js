// Assignment Code
// prompt user for password criteria

// length of password has to be atlest 8chrts and no more the n128 chrts
// password sneeds to include lowercase uppercase numeric and or special characters.

var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var specChar = ['!','@','#','$','%','^','&','*','?','-',]
var numbers =['0','1','2','3','4','5','6','7','8','9']


function password() {


var length = window.prompt('How many characters in length would you like you password to be')
console.log(length)

if (isNaN(length)) {

alert('Password must be a numeric number');
return password() ;

}

if(length < 8) {
  alert('Your password length must be 8 or more charqacters');
  return password();
}
if(length > 128) {
  alert('Your password length must be less than 128 characters');
  return password();
}
var haslowercase = window.confirm('Would you like to include lower case letters.');
var hasuppercase = window.confirm('Would you u.');
var hasnumeric = window.confirm('Would you like to nerm.');
var hasspecailcharacters = window.confirm('Would you like to inclu speccs.');



if(
haslowercase === false &&
hasuppercase === false &&
hasnumeric === false &&
hasspecailcharacters === false
){
alert('Must choose one of the 4 character types.')
return password();
}

var optionse ={
lengthderiserd: length,
wantslowercase: haslowercase,
wantsuppercase: hasuppercase,
wantsspecailcharacters: hasspecailcharacters,



}
return optionse

console.log(optionse)


}
//function for randomizing elements from an array
function randomizeArray(arr){
//creata a variable to stoe the rnadom-length
var random = Math.floor(Math.random() * arr.length); //picking randon
//creata a varible to store array 
 var randomchrt = arr[random]         // s
// write a function to actually genertae th passwo4rd//

return randomchrt

}




function genPass(){

  var userOpt = password();

  //varivalt to storwe pass as its being created

  var result = []
// create an array to store th types of characters to include in the password

var possibleChar = [];

// create an array to store guaranted characters
var guarantedChar = [];


// check if options exist if not exit the function//
// if (!userOpt) return null;

// conditional statements that ass array of lowercase characters into array of poosible characters based on the users input
if (userOpt.wantslowercase){
  possibleChar = possibleChar.concat(lowercase);
  guarantedChar.push(randomizeArray(lowercase))
}
if (userOpt.wantsuppercase){
  possibleChar = possibleChar.concat(uppercase);
  guarantedChar.push(randomizeArray(uppercase))
}
if (userOpt.wantsspecailcharacters){
  possibleChar = possibleChar.concat(specChar);
  guarantedChar.push(randomizeArray(specChar))
}
if (userOpt.h){
  possibleChar = possibleChar.concat(hasnumeric);
  guarantedChar.push(randomizeArray(hasnumeric))
}
 for (let i=0;i<userOpt.length; i++){
  var selector = randomizeArray(possibleChar)
  result.push(selector)
  
 }
 for (let i=0; i<guarantedChar.length; i++){
  result[i]=guarantedChar[i]
 }
return result
}





var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = genPass();
  password = password.join("")

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
