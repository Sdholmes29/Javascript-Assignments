// Ask the user for their first name and store it in the variable Fname
var Fname = prompt("Please enter your first name:");

//Display a welcome mssage with enterned name
alert("Welcome, " + Fname + "! It's nice to have you here.");

const piValue = 3.1415926;

//Ask user to input their favorite number and store it in myFavNum 

var myFavNum = prompt("Please enter your favorite number:");

//Calculate the area of a circle using the user's favorite number as the radius
//Store the result in a new variable myArea using the formula A= πr²
var myArea = piValue * Math.pow(parseFloat(myFavNum), 2);
 
//Display the contents of each variable to the webpage
document.write("<p>Hello " + Fname + " , </p>");
document.write("<p>You entered " + myFavNum + " as your favorite number.</p>");
document.write("<p>If that was the radius of a circle, the circle's area would be " + myArea.toFixed(6) + ".</p>");
