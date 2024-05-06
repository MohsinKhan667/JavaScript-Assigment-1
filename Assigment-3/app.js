// Welcome city name:

var city = prompt("Enter the city name:");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to the city of lights");
}

// Greeting message based on gender:

var gender = prompt("Enter your gender:");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am");
}

// Message based on traffic signal color:

var color = prompt("Enter the color of the road traffic signal:");
if (color.toLowerCase() === "red") {
    alert("Must Stop");
} else if (color.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (color.toLowerCase() === "green") {
    alert("Move now");
}

// Alert message based on remaining fuel:

var fuel = parseFloat(prompt("Enter the remaining fuel in the car (in litres):"));
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Alert message based on condition:

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// Guess game:

// // Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt user to guess the secret number
var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the guess is correct or close enough

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess === secretNumber + 1 || guess === secretNumber - 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, incorrect guess. The secret number was " + secretNumber);
}

// Check if the given number is divisible by 3:

var number = parseInt(prompt("Enter a number:"));
if (number % 3 === 0) {
    alert(number + " is divisible by 3");
} else {
    alert(number + " is not divisible by 3");
}

// Check if the given number is even or odd:

var number = parseInt(prompt("Enter a number:"));
if (number % 2 === 0) {
    alert(number + " is an even number");
} else {
    alert(number + " is an odd number");
}

// Weather message based on temperature:

var temperature = parseInt(prompt("Enter the temperature:"));
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It is freezing outside!");
}

// Simple calculator:

var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;

if (operation === "+") {
    result = num1 + num2;
} else if (operation === "-") {
    result = num1 - num2;
} else if (operation === "*") {
    result = num1 * num2;
} else if (operation === "/") {
    result = num1 / num2;
} else if (operation === "%") {
    result = num1 % num2;
} else {
    alert("Invalid operation");
}

alert("Result: " + result);



var input = prompt("Enter a character:");

if (!isNaN(input)) {
    alert("The input is a number.");
} else if (input === input.toUpperCase()) {
    alert("The input is an uppercase letter.");
} else if (input === input.toLowerCase()) {
    alert("The input is a lowercase letter.");
} else {
    alert("The input is not a number, uppercase letter, or lowercase letter.");
}

// Program to display the larger of two integers and check if they are equal:

var num1 = parseInt(prompt("Enter the first number:"));
var num2 = parseInt(prompt("Enter the second number:"));

if (num1 > num2) {
    alert(num1 + " is larger than " + num2);
} else if (num2 > num1) {
    alert(num2 + " is larger than " + num1);
} else {
    alert("Both numbers are equal.");
}

// Program to determine if a number is positive, negative, or zero:

var number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}

// Program to check if a character is a vowel:

var character = prompt("Enter a character:");

if (character.length === 1 && "ae".includes(character)) {
    alert("The character is a vowel.");
} else {
    alert("The character is not a vowel.");
}

// Program to validate user-entered password:

var correctPassword = "password123";
var enteredPassword = prompt("Enter your password:");

if (!enteredPassword) {
    alert("Please enter your password.");
} else if (enteredPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password.");
} else {
    alert("Incorrect password.");
}

var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}