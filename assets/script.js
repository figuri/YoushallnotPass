// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");


    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

function generatePassword() {
    var length = prompt("Input below how many characters you would like your password to be (between 8 and 128 characters");
    length = parseInt(length);

    // here the value the user inputs is stored as a string in the variable called "length"
    // the parseInt method makes sure the inputted value is stored as a number
    if (isNaN(length) || length < 8 || length > 128) {
        alert("The character length you entered is invalid; Please select a number between 8 and 128 characters long");
        return;
    }
    //   the if loop here states that if the input is not a number "isNaN(length) or the length specified is not between 8 and 128 then the alert string value will appear via prompting the user to input again"
    // now we have to make sure that the users input follows the above stated condition

    var charactertypes = "";

    var lowercase = confirm("Would you like the password to contain lowercase letters?\nPrress 'OK' for yes and 'Cancel' for no.");
    if (lowercase) {
        charactertypes += "abcdefghijklmnopqrstuvwxyz";
    }
    // the if (lowercase) here says that if the user says they do want to include lowercase letters to the list of contained possible characters then the variable "charactertypes" is incremennted with the value
    var uppercase = confirm("Would you like the password to contain uppercase letters?\nPrress 'OK' for yes and 'Cancel' for no.");
    if (uppercase) {
        charactertypes += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    var symbols = confirm("Would you like the password to contain symbols?\nPrress 'OK' for yes and 'Cancel' for no.");
    if (symbols) {
        charactertypes += "!@#$%^&*()_+";
    }
    // we add confirm window for every type of character and increment the value specified above by the variable charactertypes
    var numbers = confirm("Would you like the password to contain numbers?\nPrress 'OK' for yes and 'Cancel' for no.");
    if (numbers) {
        charactertypes += "0123456789";
    }

    var password = ""
// added variable to password for the incremented value above
    if (charactertypes.length === 0) {
        alert("Im sorry, it looks like you have not selected a character type, please try again");
        return;
    }

    for (var i = 0; i < length; i++) {
        var abraKadabra = Math.floor(Math.random() * charactertypes.length);
        password += charactertypes.charAt(abraKadabra);
    }

    return password;
}





