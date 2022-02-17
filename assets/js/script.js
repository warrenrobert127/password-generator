
// Assignment code here
var passLength = " ";
var numeric = " ";
var symbolRandom = " ";
var lowerCase = " ";
var upperCase = " ";
var choices = " ";
var passCond = " ";
var selectedchar;
var newPass = " ";
var generateBtn = document.querySelector("#generate");

var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = ["!", "@", "#", "$", "%", "^", "*", "&", "(", ")"];



//Generates a random lowercase character
function getRandomLower() {
    // 
    var getRandomLower = confirm("Would you like to include lower case letters?")
    if (getRandomLower === true) {
        var choice = "lower case letters   "
        choices = choices.concat(choice);
        passCond = passCond.concat(alphaLower);
    } else {
        passCond = passCond
    }

};
// console.log(passCond)
// Generates a random uppercase character
function getRandomUpper() {
    
    var getRandomUpper = confirm("Would you like to add uppercase letters?")
    if (getRandomUpper === true) {
        var choice = "upper case letters     "
        choices = choices.concat(choice);
        passCond = passCond.concat(alphaUpper);
    } else {
        passCond = passCond
    }
};

// Generates a random number 0-9
function getRandomNumber() {
    // first attempt
    // var getRandomNumber = String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    // numeric = getRandomNumber;
    // return numeric;
    //second attempt
    var getRandomNumber = confirm("Would you like to add numbers?")
    if (getRandomNumber === true) {
        var choice = "numbers    "
        choices = choices.concat(choice);
        passCond = passCond.concat(numeric);
    } else {
        passCond = passCond;
    }
};

// Generates a random symbol
function getRandomSymbol() {
    // var length = 1
    // var charset = "!@#$%^&*(){}[]=<>/,.";
    // symbolRandom = "";
    var getRandomSymbol = confirm("Would you like to add symbols?");
    if (getRandomSymbol === true) {
        // for (var i = 0, n = charset.length; i < length; ++i) {
        //     symbolRandom += charset.charAt(Math.floor(Math.random() * n));
            var choice = "Symbols    "
            choices = choices.concat(choice);
			passCond = passCond.concat(symbols);
        } else {
			passCond = passCond;
		}
        
        // return passCond;


};


// function to generate password

function createPass() {
    for (var i = 0; i < passLength; i++) {
        var newPassString = passCond.toString();
        var noComma = newPassString.replace(/,/g, "")
        var noSpace = noComma.replace(/\s/g, "");
        var pen = noSpace.length;
        console.log(pen);
        console.log(noSpace);
        //string with all the selected criteria was randomnly generated using the Math.floor
        selectedchar = noSpace[Math.floor(Math.random() * pen)];
        console.log(selectedchar);
        newPass = newPass.concat(selectedchar);



    };
};
//USer alert to show choices made
function selectedCriteria() {
    console.log(choices);
    var selectedCriteria = confirm("You select the following: " + choices);
	if (!selectedCriteria) {generatePassword()} else {
		return
	};
};


//  MAIN FUNCTION
function passGen() {
    var promptPassGen = confirm("Would you like to generate a new password");
    //console.log(promptPassGen);
    if (promptPassGen === true) {
        var selectLength = prompt("How long do you want your password to be? Please choose a number between 8 and 128.");
        //	console.log(selectLength);
        if (selectLength < 8 || selectLength > 128)
        alert("Must enter a number between 8 and 128!")
        // var selectLength = prompt("Enter a number between 8 and 128")
        passLength = selectLength;
        return passLength;
        } else {
        alert("Your entries do not meet the criteria!")
        return
    };

};

function generatePassword() {
    passGen();
    getRandomLower();
    getRandomUpper();
    getRandomNumber();
    console.log(passLength);
    getRandomSymbol()
    createPass();
    selectedCriteria();


    // console.log(choices);
    console.log(newPass)
    //   console.log(symbolRandom);  
    //   getRandomUpper();
    // getRandomNumber()
    // getRandomSymbol();
    // // console.log(passLength);
    // console.log(lowerCase);
    // console.log(upperCase);
    // // console.log(numeric);
    // console.log(passCond);
    // console.log(passLength);
    window.alert(newPass)
    passCond = ""
};

// Write password to the #password input
function writePassword() {
    password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}


generateBtn.addEventListener("click", function() {
    generatePassword();
});

  passGen();
  getRandomLower();
 getRandomUpper();
 getRandomNumber()
 getRandomSymbol();
 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");