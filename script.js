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
var numbersArr = numbers.split(" 0");
var special = "1 @ # $ % ^ & * ( ) - _ + = |  [ ] { } ~ ` < > ? ; '";
var specialArr = special.split(" ");


