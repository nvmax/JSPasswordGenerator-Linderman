// Assignment Code
var generateBtn = document.querySelector("#generate");
// creating variables length, lowercase, uppercase, numeric, special
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";
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
   if (passwordLength < 8) {
    alert("Password must be at least 8 characters long.");
    lengthCheck();
   }else if (passwordLength > 128) {
    alert("Password must be less than 128 characters long.");
    lengthCheck();
    } else if (isNaN(passwordLength)) {
    alert("Password must be a number.");
    lengthCheck();
  }
  return passwordLength;
} 

function generatePassword(){
  lengthCheck();
  console.log(passwordLength); // RETURED 9 WORKS
}

