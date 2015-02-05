// this is a single line comment in javascript

/* 
 BLOCK COMMENT - GOOD FOR WHOLE SECTIONS BEING TURNED OFF
*/

// VARIABLES

//string type of data
var firstName = "kim"; //setting a variable

var userName = "bob"; //using a variable

// the = is the assignment operator

var firstName = "kim";
var lastName = "walters";

//bad variable names
//var @hi there
// can't start with numbers or symbols with the exception of the underscore_
// var time = "12:30"; time is a reserved keyword

//USING SINGLE AND DOUBLE QUOTE

var myComment = "who said this:";
var myQuote = '"all the world\'s a stage"';
//var myQuote = "all the world's a stage";

//console.log(myComment); //shows the value of my comment to the console, when we reload
var message = myComment + " " + myQuote; //joining two variables
//console.log(message);

//target and replace elments on the page
var paragraphRef = document.getElementById("replace");
paragraphRef.innerHTML = message;

//NUMBERS - DONT USE QUOTES
var level = 1;
var lives = 3;
var ssNumber = 234554567;

console.log(level);

/* ARRAY DATA TYPE */
