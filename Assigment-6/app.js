// chapter 21 t0 25                     String Methods

// Q1
// var firstName = prompt("Enter your first name")
// var lastName = prompt("Enter your last name")

// var fullName = firstName +" "+ lastName
// document.write("Hello!" + " " + fullName + " " + "Welcome")

// Q2
// var favMobile = prompt("Enter your favourite mobile")
// var totalLength = favMobile.length

// document.write(`My favourite phone is: ${favMobile} <br/> Length of string: ${totalLength}`)

// Q3
// var str = "pakistani"
// var indexing = str.indexOf("n")

// document.write(`String: ${str} <br/> Index of 'n': ${indexing}`);

// Q4
// var str = "Hello World"
// var indexing = str.lastIndexOf("l")

// document.write(`String: ${str} <br/> Last index of 'l': ${indexing}`)

// Q5
// var str = "Pakistani"
// var char = str.charAt(3)

// document.write(`String: ${str} <br/> Character at index 3: ${char}:`)

// Q6
// var firstName = prompt("Enter you first name")
// var lastName = prompt("Enter you last name")
// var fullName = firstName.concat(" " + lastName)

// document.write("Hello! ".concat(fullName))

// Q7
// var cityName = "Hyderabad"
// var afterRep = cityName.replace("Hyder","Islam")
// document.write(`City: ${cityName} <br/> After replacment: ${afterRep}`)

// var city = "hyderabad"
// var neww = ""
// var check = false
// for(var i = 0; i < city.length; i++){
//     if(city.slice(i,i + city.length) === "hyderabad"){
//         check = true
//         neww = city.replace("hyder","islam")
//     }
// }
// document.write(`City : ${city}</br>`)
// document.write(`After Replacement: ${neww}`)

// Q8)
// var message = "Ali and Sami are best friends. They play cricket and football together."
// var rep = message.replaceAll("and", "&")
// document.write(`Message: ${message} <br/> Update message: ${rep}`)

//  Q9
// var str = "472"
// var num = Number(str)
// document.write("Value:" +" "+ str + "<br>" + "Type:" +" "+ typeof str + "<br/>");
// document.write("Value:" +" "+ str + "<br>" + "Type:" +" "+ typeof num + "<br/>")

//  Q10
// var user = prompt("Enter a word")
// var upper = user.toUpperCase()
// document.write(`User input: ${user} <br/> Upper case: ${upper}`)

// Q11
// var user = prompt("Enter a word")
// var title = user.slice(0, 1).toUpperCase() + user.slice(1)
// document.write(`User input: ${user} <br/> Title case: ${title}`)

// Q12
// var num = 35.36
// var result = num.toString().replace(".","")
// document.write("Number: " + num + "<br/>" + "Result: " + result)

// Q13
// var userName = prompt("Please enter a valid username")
// if (userName.charCodeAt() === 33 || userName.charCodeAt() === 64) {
//     document.write("Please enter a valid username")
// }else {
//     document.write(`you entered ${userName}`)
// }

// Q14
// var arr = ["cake", "applepie", "cookie", "chips", "patties", "bread"]
// var search = prompt("Welcome to ABC bakery. What do you want to order sir/ma'am").toLowerCase()
// var check = false
// for (var i = 0; i < arr.length; i++) {
//     if (search === arr[i]) {
//         check = true
//         document.write(`${arr[i]} is available at index ${arr.indexOf(search)} in our bakery`);
//     }
// }
// if (check === false) {
//     document.write(`We are sorry. ${search} is not available in our bakery`);
// }

// Q15
// var password = prompt("Enter your password")
// if (password.length < 6) {
//     document.write("Password must be at least 6 characters long");
// } else if (!isNaN(password.charAt(0))) {
//     document.write("Password can not being with a number <br/> please enter a valid password");
// } else if (!/[a-zA-Z]/.test(password) || !/[0-9]/.test(password)){
//     document.write("Password must contain both alphabets and numbers.")
// }else{
//     document.write("password is valid");
// }

// Q16
// var university = "University of Karachi";
// var breakWord = university.split("").join("<br/>")
// document.write(breakWord);

// Q17
// var user = prompt("Enter any word", "pakistan")
// var lastChar = user.charAt(user.length - 1)
// document.write(`user input: ${user}` + "<br/>")
// document.write(`last character of input: ${lastChar}`)

// Q18
// var text = "The quick brown fox jumps over the lazy dog."
// var findWord = "the"
// var word = text.split(" ")
// var count = 0
// for (var i = 0; i < word.length; i++) {
//     if (word[i].toLowerCase() == findWord) {
//         count++
//     }
// }
// document.write(`Text: ${text} <br/> There are ${count} occurence(s) of word '${findWord}' `)

// =====================================================================================================//

// chapter 26 t0 30                 === Math Methods ===

// Q 1
// var num = 3.45214;
// document.write(`number: ${num} <br/>`)
// var round = Math.round(num)
// document.write(`round off value: ${round} <br/>`)
// var floor = Math.floor(num)
// document.write(`floor value: ${floor} <br/>`)
// var ceil = Math.ceil(num)
// document.write(`ceil value: ${ceil} <br/>`)

// Q 2
// var num = -2.673;
// document.write(`Number ${num} <br/>`);
// var round = Math.round(num);
// document.write(`round off value: ${round} <br/>`);
// var floor = Math.floor(num);
// document.write(`floor value: ${floor} <br/>`);
// var ceil = Math.ceil(num);
// document.write(`ceil value: ${ceil}`)

// Q 3
// var num = prompt("Enter number")
// var absolute = Math.abs(num)
// document.write(`The absolute value of ${num} is ${absolute}`)

// Q 4
// var dice = Math.floor(Math.random() * 6) + 1
// var dice1 = Math.floor(Math.random() * 6) + 1
// document.write(`Random dice value:${dice} <br/>`)
// document.write(`Random dice value:${dice1}`)

//  Q 5
// var head = "Heads";
// var tail = "Tails";
// var firstToss = Math.floor(Math.random() * 2) + 1
// var finalToss = Math.floor(Math.random() * 2) + 1
// document.write(`${firstToss} <br/> Random coin value ${head}:<br/>`);
// document.write(`${finalToss} <br/> Random coin value: ${tail}:<br/>`);

// var player1 = prompt("Enter player 1 name");
// var player2 = prompt("Enter player 2 name");
// var result = Math.floor(Math.random() * 2) + 1
// if (result === 1) {
//     document.write(`${player1} win the toss`)
// } else {
//     document.write(`${player2} win the toss`)
// }

// Q 6
// var randomNum = Math.random() * 101;
// var num = Math.floor(randomNum)
// document.write("Random number between 1 and 100:" + num);

// Q 7
// var weight = prompt("Enter your weight in kilograms");
// var user = parseFloat(weight);
// document.write("Thhe weight of user is " + user + " kilograms")

// Q 8
// var num = prompt("Enter number from 1 to 10");
// var secretNumber = 5;
// if (num == secretNumber) {
//     document.write("congratulation your guess is right");
// } else {
//     document.write(`Sorry, the secret number was. Try again!`);
// }

// var text = prompt("Enter number between 1 to 10");
// var userInput = parseInt(text);
// var secretNumber = 7;
// var flag = false;

// for(var i = 0; i <= 10; i++){
//     if(userInput === secretNumber){
//         alert("Congratulation you guess the secret number");
//         flag = true;
//         break;
//     }
// }
//     if(flag === false){
//         alert("Try again");
//     }

// =====================================================================================================//

// chapter 31 t0 34                 === Date Methods ===

// Q 1
// var date = new Date();
// document.write(date);

// Q 2
// var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var date = new Date();
// var currentMonth = date.getMonth()
// var result = monthName[currentMonth]
// alert("Current month: " + result);

// Q 3
// var week = ["sun", "mon", "tue", "web", "thur", "fri", "sat"]
// var date = new Date().getDay();
// alert("Today is " + week[date])

// Q 4
// var message = "It’s Fun day";
// var day = new Date().getDay()
// if(day == 6 || day == 0){
//     alert(message)
// }else{
//     alert("It's not a fun day")
// }

// Q 5
// var date = new Date().getDate()
// var check = false
// for (var i = 0; i < date; i++) {
//     if (date < 16) {
//         check = true
//         document.write("First fifteen days of the month")
//         break;
//     }
// }
// if (check === false) {
//     document.write("Last fifteen of the month")
// }

// Q 6
// var currentDate = new Date("sat Dec 05 2015 22:32:23")
// var passedDateSec = new Date("Jan 1 1970")
// var minusSec = currentDate - passedDateSec;
// var convertSec = minusSec
// var passedDateMin = new Date("Jan 1 1970")
// var minusMint = currentDate - passedDateMin
// var convertMin = minusMint / (1000 *  60 * 60)
// document.write(`Current Date: ${currentDate} <br/> Elapsed Millisecond since jan 1, 1970: ${convertSec} <br/> Elapsed minutes since jan 1, 1970: ${convertMin}`)

// Q 7
// var date = new Date()
// date.getHours()
// if(date < 12){
//     alert("It's AM")
// }else{
//     alert("Its's PM")
// }

// Q 8
// var date = new Date("31 Dec 2020")
// document.write("Late date:" + date);

// Q 9
// var date = new Date("10 Mar 2024")
// var ramdan = new Date("18 june 2015")
// var result = date - ramdan

// var final = Math.floor((result / (1000 * 60 * 60 * 24)));

// document.write(final + " days have passed since 1st Ramadan, 2015")

// Q 10
// var date = new Date("1 jan 2015 22:50:16");
// var currentDate = new Date("5 dec 2015").getTime();
// var result = currentDate - date;
// var final = Math.floor(result / (1000 * 60));

// document.write(`On reference date ${date} <br/> ${final} seconds had passed since beginning of 2015`)

// Q 11
// var currentDate = new Date("5 dec 2015 23:8:16")
// var since = new Date("5 dec 2015 22:8:16")
// var timeDiff = currentDate - since;
// var diffHrs = Math.floor(timeDiff / (1000 * 60 * 60));
// document.write(`current date: ${currentDate} <br/> ${diffHrs} hour ago, it was ${since}`)

// Q 12
// var newDate = new Date("5 dec 2015 23:9:37")
// var currentDate = new Date("5 dec 1915 23:9:37")
// var currentyear = currentDate.getFullYear()
// var minusYears = 100
// var resultYears = currentyear-minusYears;
//  document.write(`current date: ${newDate} <br/> ${minusYears} year back, it was ${currentDate}`)

// Q 13
// var age = +prompt("Enter your age")
// var currentyear = new Date().getFullYear()
// var birthYear = currentyear - age;
//  document.write("your age is " + age + "<br/>" +  "your birth year is " + birthYear )

// Q 14
// var userName = prompt("Enter your name")
// var totalUnit = +prompt("Enter your unit")
// var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = new Date().getMonth()
// var chargesPerUnit = 16;
// var lateFees = 350;
// var result = totalUnit * chargesPerUnit

// document.write(
//     `<h1>K-Electric Bill</h1> <br/>
//     Customer Name: ${userName} <br/>
//     Month: ${monthNames[currentMonth]} <br/>
//     Number per unit: ${totalUnit} <br/>
//     Charges per unit: ${chargesPerUnit} <br/>
//     Net Amount Payable(within Due Date): ${result} <br/>
//    Late Payment surcharge: ${lateFees} <br/>
//     Gross Amount Payable (After Due Date):${result + lateFees}`
// )

// END



















































