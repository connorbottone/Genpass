// Assignment Code
// prompt user for password criteria

// length of password has to be atlest 8chrts and no more the n128 chrts
// password sneeds to include lowercase uppercase numeric and or special characters.

// var uppercase = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'].split(',')
// var lowercase = ['a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z'].split(',')
// var specChar = ['!,@,#,$,%,^,&,*,?,-,].split(',')
// var numbers =['0,1,2,3,4,5,6,7,8,9'].split(',')


function password() {


var length = parseInt (prompt('How many characters in length would you like you password to be')
);
console.log(length)

if (Number.isNaN(length)) {

alert('Password must be a numeric number');
return null ;

}

if(length < 8) {
  alert('Your password length must be 8 or more charqacters');
  return null;
}
if(length > 128) {
  alert('Your password length must be less than 128 characters');
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
alert('Must choose one of the 4 character types.')
return null;
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
function randimzearray(arr){
//creata a variable to stoe the rnadom-length
var random = Math.floor(Math.random() * arr.length); //picking randon
//creata a varible to store array 
 var randomchar = arr[random]         // s
// write a function to actually genertae th passwo4rd//

return randomchar

}
function genpass(){

  var useropt = optionse();

  //varivalt to storwe pass as its being created

  var result = []
// create an array to store th types of characters to include in the password

//creat an arrqay to store guarented characters

// check if options exist if not exit the function//
if (!useropt) return null;

// conditional statements that ass array of lowercase characters into array of poosible characters based on the users input
if (useropt.haslowercase){
  /possibelchar = possibelchar.concat(lowercase);
  // pushing random poss charaters to the guranted characguarntedchar.push(random)


// creatz a for other options



// creata a for loop mmix in guarentedd results //

  // make a function that randomizes my characters




  return results.join('')
}

}
//vreats a var

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
