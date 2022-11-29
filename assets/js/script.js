
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specChar = ['~', '`', '!', '@', '#', '$', '%', '^','&','*','(',')','-','_','=','+','}','{',']','[','|',';',':','"','<','>',',','.','?']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


function password() {


  var length = window.prompt('How many characters in length would you like you password to be?')
  console.log(length)

  if (isNaN(length)) {

    alert('Password length must be entered as  number!');
    return null;

  }

  if (length < 8) {
    alert('Your password length must be 8 or more characters.');
    return null;
  }
  if (length > 128) {
    alert('Your password length must be less than 128 characters.');
    return null;
  }
  var haslowercase = window.confirm('Do you want your password to contain lowercase letters?');
  var hasuppercase = window.confirm('Do you want your password to contain uppercase letters?');
  var hasnumeric = window.confirm('Would you like to include numbers in your password?');
  var hasspecailcharacters = window.confirm('Do you want your password to contian special characters?');



  if (
    haslowercase === false &&
    hasuppercase === false &&
    hasnumeric === false &&
    hasspecailcharacters === false
  ) {
    alert('You must include one of the four character types within your password!\n.Lowercase letters\n.Uppercase letters\n.Numbers\n.Special characters')
    return null;
  }

  var optionse = {
    lengthderiserd: length,
    wantslowercase: haslowercase,
    wantsuppercase: hasuppercase,
    wantsspecailcharacters: hasspecailcharacters,
    wantsnum: hasnumeric



  }
  console.log(optionse);
  return optionse;

  


}

function randomizeArray(arr) {
  
  var random = Math.floor(Math.random() * arr.length); 
  var randomchrt = arr[random]         

  return randomchrt

}




function genPass() {

  var userOpt = password();

  

  var result = []
  

  var possibleChar = [];

  
  var guarantedChar = [];




  
  if (userOpt.wantslowercase) {
    possibleChar = possibleChar.concat(lowercase);
    guarantedChar.push(randomizeArray(lowercase))
  }
  if (userOpt.wantsuppercase) {
    possibleChar = possibleChar.concat(uppercase);
    guarantedChar.push(randomizeArray(uppercase))
  }
  if (userOpt.wantsspecailcharacters) {
    possibleChar = possibleChar.concat(specChar);
    guarantedChar.push(randomizeArray(specChar))
  }
  if (userOpt.wantsnum) {
    possibleChar = possibleChar.concat(numbers);
    guarantedChar.push(randomizeArray(numbers))
  }
  for (let i = 0; i < userOpt.lengthderiserd; i++) {
    var selector = randomizeArray(possibleChar)
    result.push(selector)

  }
  for (let i = 0; i < guarantedChar.length; i++) {
    result[i] = guarantedChar[i]
  }
 console.log(result)
  return result
}





var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = genPass();
  password = password.join("")

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
