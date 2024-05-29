// chapter 17 to 20      Arrays and loop

// Q1
//  var emptyArr = [[[]]];
//  console.log(emptyArr);

//  Q2
// var arr = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];
// document.write(arr[0].join(" ") + "<br>")
// document.write(arr[1].join(" ") + "<br>")
// document.write(arr[2].join(" "))

// Q3
// for(var i = 1; i <= 10; i++){
//     document.write(i + "<br>")
// }

// Q4
// var table = +prompt("Enter table number")
// var tableLength = +prompt("Enter table length")

// document.write("Multiplication table of" + " " + table + "<br/>")
// document.write("length" + " " + tableLength + "<br/>")
// document.write("<br/>")

// for (var i = 1; i <= tableLength; i++) {
//     document.write(table + " " + "x" + " " + i + " " + "=" + " " + table * i + "<br>")
// }
// if (table !== table) {
//     document.write("Number not valid")
// }

// Q5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for(var i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br>")
// }
// document.write("<br>")
// for (var i = 0; i < fruits.length; i++) {
//     document.write("Element at index" + " " + i + " " + "is" + " " + fruits[i] + "<br>")
// }

// Q6
// document.write("<b>Counting:</b>" + "<br>" + "<br>")
// for (var i = 1; i <= 15; i++) {
//     document.write(i + ",")
// }

// document.write("<br> <br>" + "<b>Reverse countings:</b>" + "<br>" + "<br>")
// for (var i = 10; i >= 1; i--) {
//     document.write(i + ",")
// }

// document.write("<br> <br>" + "<b>Even:</b>" + "<br>" + "<br>")
// for (var i = 0; i <= 20; i = i + 2) {
//     document.write(i + ",")
// }

// document.write("<br> <br>" + "<b>Odd:</b>" + "<br>" + "<br>")
// for (var i = 1; i <= 20; i = i + 2) {
//     document.write(i + ",")
// }

// document.write("<br> <br>" + "<b>Series:</b>" + "<br>" + "<br>")
// for (var i = 2; i <= 20; i = i + 2) {
//     document.write(i + "k" + ",")
// }

// Q7
// var userShow = prompt("Welcome to My Bakery What do you want to order sir/ma'ma?")

// var bakeryItem = ["cake", "bun", "cookie", "chips", "patties"]

// var flag = false;

// for (var i = 0; i < bakeryItem.length; i++) {
//     if (userShow === bakeryItem[i]) {
//         flag = true;
//         document.write(`${userShow} is "<b>available</b>" at index  ${[i]} in our bakery`)
//     }
// }
// if (flag === false) {
//     document.write(`We are sorry. ${userShow} is "<b>not available</b>" in our bakery`)
// }

// Q8
// var number = [24, 53, 78, 91, 12]
// var largeNumber = number[0]
// for(var i = 0; i < number.length; i++){
//     if(number[i] > largeNumber){
//         largeNumber = number[i]
//     }
// }
// document.write(`Array items: ${number} <br>`)
// document.write(`The largest number: ${largeNumber}`)

//  Q9
// var number = [24, 53, 78, 91, 12]
// var smallNumber = number[0]

// for (var i = 0; i < number.length; i++) {
//     if (number[i] < smallNumber) {
//         smallNumber = number[i]
//     }
// }
// document.write(`Array items: ${number} <br>`)
// document.write(`The smallest number is ${smallNumber}`)

// Q10
// var table = 5
// for (var i = 1; i <= 20; i++) {
//     document.write(table * i + ", ")
// }

// CHAPTER NO 17 TO 20 END !