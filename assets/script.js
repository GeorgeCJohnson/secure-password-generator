var generateBtn = document.querySelector("#generate");

//Declare characters to be used in password

var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var character = "";
var password = "";

function generatePassword() {
  console.log("You clicked the button!"); 
  character = ""; 
  password = "";
  var typecheck = false;

//User prompts for the password criteria every time a selection is made it is also confirmed.

var characterLength = prompt("Please choose the number of character you want between 8 and 128."); 

var length = Number(characterLength);

    if (length = NaN || characterLength < 8 || characterLength > 128) {
    alert("Enter a valid number of characters between 8 and 128.");
    return "Please try again.";
    }

    if (confirm("Do you want to include lowercase letters?")) {character = character.concat(lowercase);alert("You have chosen to include lowercase letters.");}
    else {alert("You have chosen not to include lowercase letters.");
    }

    if (confirm("Do you want to include uppercase letters?")) {character = character.concat(uppercase); alert("You have chosen to include uppercase letters.");}
    else {alert("You have chosen not to include uppercase letters.");
    }

    if (confirm("Do you want to include numbers?")) { character = character.concat(numbers); alert("You have chosen to include numbers.");} 
    else {alert("You have chosen not to include numbers.");
    }

    if (confirm("Do you want to include special characters?")) {character = character.concat(special); alert("You have chosen to include special characters.");}
    else {alert("You have chosen not to include special characters.");
    }

    for (var i = 0 ; i < characterLength; i++) {
    password += character[Math.floor(Math.random()*character.length)];
    }
    return generatePassword; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);