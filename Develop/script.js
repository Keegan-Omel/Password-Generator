// an html elemenent that is selected with an id of #generate
var generateBtn = document.querySelector("#generate");

//function runs the password generator, charset options, and randomizing of charsets and the printing of password to text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
//this posts/prints the password to the text area in HTML
  passwordText.value = password;

}
//add functionality to click the password generators generate button and start running the program, loops, etc
generateBtn.addEventListener("click", writePassword); 
//functions to generate a password used within the previous function writepasswords this is executed after you click the generate button, this generates password.
function generatePassword() {
  var length = prompt("How many characters would you like to choose? (8-128 characters)")

    if (length < 8 || length > 128 || isNaN(length)) {
      alert("Please enter a valid length between 8 and 128. ");
      return "";
    }
    
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numericChars = "0123456789";
    var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var passwordChars = "";
    //confirm adds a message
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");

    if (includeLowercase) {
      passwordChars += lowercaseChars;
    }
    if (includeUppercase) {
      passwordChars += uppercaseChars;
    }
    if (includeNumeric) {
      passwordChars += numericChars;
    }
    if (includeSpecial) {
      passwordChars += specialChars;
    }
    //adding the exclaimation mark is negating the expression of the previous if statments, if user doesnt choose all four of the charsets then will give alert and reset
    if (!lowercaseChars && !uppercaseChars && !numericChars && !specialChars) {
    alert("You must choose at least one character type")
    generatePassword();
    }

    //randomizes the character sets chosen to make up the password
    var password = ""
      for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars.charAt(randomIndex);
    }
    //previews password in alert box and if you ok it, then password populates the text in html
      alert(password)
      return password;

}