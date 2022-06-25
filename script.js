// Assignment Code
var generateBtn = document.querySelector("#generate");

// credit: image72 for lowercase portion figured the rest out on my own from that point with his code help.
// https://gist.github.com/bendc/1e6af8f2d8027f2965da?permalink_comment_id=3792470#gistcomment-3792470 
// - helped me figure out how to generate a random character and pull from arrays into string
// grabs lowercase letters 
var lowercaseChar = String.fromCharCode(...Array(123).keys()).slice(97)
console.log(lowercaseChar)
// grabs uppercase letters
var uppercaseChar = String.fromCharCode(...Array(123).keys()).slice(65,91)
console.log(uppercaseChar)
// grabs numbers 
var numberChar = String.fromCharCode(...Array(123).keys()).slice(48,58)
console.log(numberChar)
// grabs special characters 
var specialChar = String.fromCharCode(...Array(123).keys()).slice(32,48)
    .concat(String.fromCharCode(...Array(123).keys()).slice(59,65))
console.log(specialChar)
var passwordLength;
var checklowerCase;
var checkUpperCase;
var checkNumber;
var checkSpecial;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// password length function and check//
function lengthCheck() {
  passwordLength = prompt("How many characters would you like your password to be?");
//checks if password is greater than 8
   if (passwordLength < 8) {
    alert("Password must be at least 8 characters long.");
    lengthCheck();
// checks if password is less than 128
   }else if (passwordLength > 128) {
    alert("Password must be less than 128 characters long.");
    lengthCheck();
// checks if there is nothing entered
    } else if (isNaN(passwordLength)) {
    alert("Password must be a number.");
    lengthCheck();
  }
  return passwordLength;
} 

// asks if you want lowercase letters
function lowercaseCheck(){
  checklowerCase = prompt("Do you want lowercase in your password? \n(Yes or No)");
    checklowerCase = checklowerCase.toLowerCase();
// asks for  response of yes or no
    if (checklowerCase === null || checklowerCase === ""){
      alert("Please answer Yes or No");
      lowercaseCheck();
// if yes, checklowerCase is true
    }else if (checklowerCase === "yes" || checklowerCase ==="y"){
      checklowerCase = true;
      return checklowerCase;
// if no, checklowerCase is false
    }else if (checklowerCase === "no" || checklowerCase ==="n"){
      checklowerCase = false;
      return checklowerCase;
// if anything else, ask again
    }else {
      alert("Please answer Yes or No");
      lowercaseCheck();
    }
    return checklowerCase;
 }

// asks if you want uppercase letters
function uppercaseCheck(){
  checkUpperCase = prompt("Do you want uppercase in your password? \n(Yes or No)");
    checkUpperCase = checkUpperCase.toLowerCase();
// asks for response of yes or no
    if (checkUpperCase === null || checkUpperCase === ""){
      alert("Please answer Yes or No");
      uppercaseCheck();
// if yes, checkUpperCase is true
    }else if (checkUpperCase === "yes" || checkUpperCase ==="y"){
      checkUpperCase = true;
      return checkUpperCase;
// if no, checkUpperCase is false
    }else if (checkUpperCase === "no" || checkUpperCase ==="n"){
      checkUpperCase = false;
      return checkUpperCase;
// if anything else, ask again
    }else {
      alert("Please answer Yes or No");
      uppercaseCheck();
    }
    return checkUpperCase;
  }
// asks if you want numbers in your password 
function numberCheck(){
  checkNumber = prompt("Do you want numbers in your password? \n(Yes or No)");
    checkNumber = checkNumber.toLowerCase();
// asks for response of yes or no
    if (checkNumber === null || checkNumber === ""){
      alert("Please answer Yes or No");
       numberCheck();
// if yes, checkNumber is true
    }else if (checkNumber === "yes" || checkNumber ==="y"){
      checkNumber = true;
      return checkNumber;
// if no, checkNumber is false
    }else if (checkNumber === "no" || checkNumber ==="n"){
      checkNumber = false;
      return checkNumber;
// if anything else, ask again 
    }else {
      alert("Please answer Yes or No");
      numberCheck();
    }
    return checkNumber;
  }

    // asks if you want special characters in your password
function specialCheck(){
  checkSpecial = prompt("Do you want special characters in your password? \n(Yes or No)");
    checkSpecial = checkSpecial.toLowerCase();
// asks for response of yes or no
    if (checkSpecial === null || checkSpecial === ""){
      alert("Please answer Yes or No");
      specialCheck();
// if yes, checkSpecial is true
    }else if (checkSpecial === "yes" || checkSpecial ==="y"){
      checkSpecial = true;
      return checkSpecial;

    }else if (checkSpecial === "no" || checkSpecial ==="n"){
      checkSpecial = false;
      return checkSpecial;
// if anything else, ask again
    }else {
      alert("Please answer Yes or No");
      specialCheck();
    }
    return checkSpecial;
  }


function generatePassword(){
  lengthCheck();
  console.log(passwordLength); // shows # entered - works
  lowercaseCheck();
  console.log(checklowerCase); // shows if lowercase is selected - works
  uppercaseCheck();
  console.log(checkUpperCase); // shows true & false when yes or no is selected - works
  numberCheck();
  console.log(checkNumber); // shows true & false when yes or no is selected - works
  specialCheck();
  console.log(checkSpecial); // shows true & false when yes or no is selected - works

  var characterString = ""
// adding var password its not in global scope.
  var password = "";

  // credit: https://stackoverflow.com/a/32625608 SiCK (allowed me to figure out check each against each other)
  // checks if checklowerCase and upperCase and number and special are true or false
  if (checklowerCase && checkUpperCase && checkNumber && checkSpecial){
    characterString += lowercaseChar + uppercaseChar + numberChar + specialChar;
  
  } else if (checklowerCase && checkUpperCase){
    characterString += lowercaseChar + uppercaseChar;

  } else if (checkUpperCase && checkNumber){
    characterString += uppercaseChar + numberChar;

  } else if (checkNumber && checkSpecial){
    characterString += numberChar + specialChar;

  } else if (checkSpecial && checklowerCase){
    characterString += specialChar + lowercaseChar;
                                        
  } else if (checklowerCase){
    characterString += lowercaseChar;

  } else if (checkUpperCase){
    characterString += uppercaseChar;

  } else if (checkNumber){
    characterString += numberChar;

  } else if (checkSpecial){
    characterString += specialChar;
  }

// for loop to generate password
  for (var i = 0; i < passwordLength; i++){
    password += characterString.charAt(Math.floor(Math.random() * characterString.length));
  }
  // returns password to main function
  return password;
}

