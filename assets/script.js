var generateBtn = document.querySelector("#generate");

//Declare characters to be used in password

var charactertype = [];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var specialCharactersArrayy = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^", "~", "*", "?", ":",];
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }

function generatePassword() {
    console.log("You clicked the button!");
    var choiceArray = [];
    var typeCheck = false
    var characterLength = parseInt(prompt("Please choose the number of character you want between 8 and 128."));

//User prompts for the password criteria every time a selection is made it is also confirmed.

    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Enter a valid number of characters between 8 and 128.");
        return "Please try again.";
    }

    if (confirm("Do you want to include lowercase letters?")) {
        choiceArray = choiceArray.concat(lowerCaseArray);
        typeCheck = true
    }

    if (confirm("Do you want to include uppercase letters?")) {
        choiceArray = choiceArray.concat(upperCaseArray);
        typeCheck = true
    }

    if (confirm("Do you want to include numbers?")) {
        choiceArray = choiceArray.concat(numberArray);
        typeCheck = true
    }

    if (confirm("Do you want to include special characters?")) {
        choiceArray = choiceArray.concat(specialCharactersArrayy);
        typeCheck = true
    }

    if (!typeCheck) {
        alert("You must choose at least one character type for your password.");
        return generatePassword();
    }

    var password = "";
    for (var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArray.length);
        password += choiceArray[randomIndex]
    }
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);