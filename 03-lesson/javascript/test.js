// this is a single line comment in javascript

/* 
 BLOCK COMMENT - GOOD FOR WHOLE SECTIONS BEING TURNED OFF
*/

// VARIABLES

//string type of data*********************************************
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
var message = firstName + " " + lastName; //joining two variables
//console.log(message);

//target and replace elments on the page
var string1 = document.getElementById("string1");
string1.innerHTML = message;
var imagePath = 'images/water-color/thumbs/artwork_01.jpg';
//console.log(imagePath);
message = message.toUpperCase();
//console.log(message);

//NUMBERS - DONT USE QUOTES*********************************************
var level = 1;
var lives = 3;
var ssNumber = 234554567;//this is an integer
var cost = 1.50;//this is a float type number
var cost1 = "50";
var cost2 = 50;
var total = Number(cost1) * cost2;
//console.log(total);

//console.log(level);

//* ARRAY DATA TYPE */*********************************************
//create an array
var imageList = new Array;
imageList[0] = "images/oil/thumbs/artwork_1.jpg";
imageList[1] = "images/oil/thumbs/artwork_2.jpg";
imageList[2] = "images/oil/thumbs/artwork_3.jpg";
imageList[3] = "images/oil/thumbs/artwork_4.jpg";
imageList[4] = "images/oil/thumbs/artwork_5.jpg";
imageList[5] = "images/oil/thumbs/artwork_6.jpg";
imageList[6] = "images/oil/thumbs/artwork_7.jpg";

//imageList.push("images/oil/thumbs/artwork_8.jpg");
var imagePlaceholder = document.getElementById('placeholder');
imagePlaceholder.setAttribute("src", imageList[6]);//update the src attribute of the image

//console.log(imageList.length);

//* BOOLEAN DATA TYPE */*********************************************
//truth or false, yes or no, 1 or 0
var oldEnough = false;
var hasContent = true;
var age = 20;

//* ifthen statements (branching logic, application logic, business logic) */*********************************************
if(age <= 20 && age != 5) {
    //too young
    oldEnough = false;
}else {
    oldEnough = true;
}

if (oldEnough == true) {
  //== means is equal to
  //= means gets set to
  //more code here
  console.log("You may go on the ride");
}else {
  console.log("You may not go on the ride");
}

//* Functions */*********************************************
//
function dynamicGreeting(){
  //create the built-in date object
  var now = new Date();
  var time = now.getHours();//extract the hours
  
  if(time < 12){
    alert("goodmorning");    
  }
  if(time == 12){
    alert("time to eat lunch");
  }
  if(time > 12){
    alert("good evening, the time is..." + now.toLocaleString());
  }
  
}

dynamicGreeting();