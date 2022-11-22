// Assignment Code
// prompt user for password criteria

// length of password has to be atlest 8chrts and no more the n128 chrts
// password sneeds to include lowercase uppercase numeric and or special characters.

// var uppercase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P].split(',')
// var lowercase = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p].split(',')
// var specChar = 
// var numbers =


function password() {


var length = parseInt (prompt('how many characters would you like you password to be')
);
console.log(length)

if (Number.isNaN(length)) {

alert('Password must be a numeric number');
return null ;

}

if(length < 8) {
  alert('pass length has to be 8 or more');
  return null;
}
if(length > 128) {
  alert('pass length must be less than 128');
  return null;
}
var haslowercase = confirm('Would you like to include lower case letters.');
var hasuppercase = confirm('Would you like to include lower case letters.');
var hasnumeric = confirm('Would you like to include lower case letters.');
var hasspecailcharacters = confirm('Would you like to include lower case letters.');



if(
haslowercase === false &&
hasuppercase === false &&
hasnumeric === false &&
hasspecailcharacters === false
){
alert('Must choose 1 of the 3')
return null;
}

var passwordOptions ={
length: length,
haslowercase: haslowercase,
hasuppercase: hasuppercase,
hasspecailcharacters: hasspecailcharacters,



}

console.log(passwordOptions)
return passwordOptions

}

password()



var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
