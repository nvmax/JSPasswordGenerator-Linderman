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

// asks if you want lowercase letters
function lowercaseCheck(){
  checklowerCase = prompt("Do you want lowercase in your password? \n(Yes or No)");
    checklowerCase = checklowerCase.toLowerCase();
    if (checklowerCase === null || checklowerCase === ""){
      alert("Please answer Yes or No");
      lowercaseCheck();
    }else if (checklowerCase === "yes" || checklowerCase ==="y"){
      checklowerCase = true;
      return checklowerCase;
    }else if (checklowerCase === "no" || checklowerCase ==="n"){
      checklowerCase = false;
      return checklowerCase;
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
    if (checkUpperCase === null || checkUpperCase === ""){
      alert("Please answer Yes or No");
      uppercaseCheck();
    }else if (checkUpperCase === "yes" || checkUpperCase ==="y"){
      checkUpperCase = true;
      return checkUpperCase;
    }else if (checkUpperCase === "no" || checkUpperCase ==="n"){
      checkUpperCase = false;
      return checkUpperCase;
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
        if (checkNumber === null || checkNumber === ""){
        alert("Please answer Yes or No");
        numberCheck();
        }else if (checkNumber === "yes" || checkNumber ==="y"){
        checkNumber = true;
        return checkNumber;
        }else if (checkNumber === "no" || checkNumber ==="n"){
        checkNumber = false;
        return checkNumber;
       }else {
        alert("Please answer Yes or No");
        numberCheck();
      }
      return checkNumber;
    }

    // asks if you want special characters in your password
  function specialCheck(){
    checkSpecial = prompt("Do you want special in your password? \n(Yes or No)");
      checkSpecial = checkSpecial.toLowerCase();
      if (checkSpecial === null || checkSpecial === ""){
        alert("Please answer Yes or No");
        specialCheck();
      }else if (checkSpecial === "yes" || checkSpecial ==="y"){
        checkSpecial = true;
        return checkSpecial;
      }else if (checkSpecial === "no" || checkSpecial ==="n"){
        checkSpecial = false;
        return checkSpecial;
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

}

