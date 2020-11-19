// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// How the password generator starts
// all variables needed for project
var lowerCase = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
var lowerCaseArr = lowerCase.split(" ");
var upperCase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
var upperCaseArr = upperCase.split(" ");
var numbers = "0 1 2 3 4 5 6 7 8 9";
var numbersArr = numbers.split(" ");
var special = "! @ # $ % ^ & * ( ) - _ + = | [ ] { } ~ ` < > ? ; '";
var specialArr = special.split(" ");
var allChar = [];
var result = "";

// Password Generator 
function generatePassword() {
  //a way to reset variables
allChar.length = 0;
result = "";
  // Prompt for amount of characters
  var char = 0; 
  char = prompt("How many characters do you need?"); 
  console.log(char);
    // If user picks invalid number
    if(char < 8 || char > 129 || isNaN(char)) {
      alert("Please choose a number between 8 and 128!")
      char = prompt("How many characters do you need?"); 
      console.log(char)
    }  
      if (char < 8 || char > 129 || isNaN(char)) {
        alert("Please choose a number between 8 and 128! Please press the button again.")
      }

    else {
      //confirm for lowercase
      if(confirm("Do you want lower case letters in your password?")) {
        Array.prototype.push.apply(allChar, lowerCaseArr);
        console.log(allChar);

      }
      //confirm for uppercase
      if(confirm("Do you want upper case letters in your password?")) {
        Array.prototype.push.apply(allChar, upperCaseArr);
        console.log(allChar);
      }
      //confirm for numbers
      if (confirm("Do you want numbers in your password?")){
        Array.prototype.push.apply(allChar, numbersArr)
        console.log(allChar);
      }
      //confirm special characters
      if (confirm("Do you want special characters in your password?")){
        Array.prototype.push.apply(allChar, specialArr)
        console.log(allChar);
      }
      // if not confirm was chosen
      if(allChar.length === 0){
        alert("You must select atleast one criteria for your password. Please click the button and try again. :)");
      }
      //random password loop
      else{
        for(var i = 0; i < char; i++) {
          var random = Math.floor(Math.random()*allChar.length);
          result += allChar[random]
          console.log(result);
          console.log(allChar);

        }
      }
    }
    //Display on screen
    return result;

}