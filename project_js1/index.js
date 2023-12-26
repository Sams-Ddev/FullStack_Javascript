//Javascript fundamentals

// This course teaches the concepts of Javascript as:
// Variables, Dynamic typing, Primitive/Primary value types and
// Reference type : String literal, Number literal, Boolean literal

/***********Escaping strings
 
 // ecsapes backspace
 /' ecsapes single quote
 /" ecsapes double quotes
 /n newline
 /b backscpace
 /r carriage return
 /t tab
 /f form feed

************/

/*********VARIABLES
 
-----------Declaring and Assigning Variables

keywords to  use:
  -var (eg- var variableName;)
  -let (eg- let variableName;)
  -const (eg- const constantName;)
*********/

//---------------variables Concept----------------

let name = Kwadjo;
let age = 30;

//Putting thesse variables inside of object
let person = {
  name: "Mosh", //Key value pairs
  age: 30,
};

//Dot Notation
person.name = "John";
console.log(person.name);

//Bracket Notation
console["name"] = "Mary";
console.log(person.name);

//USES OF BRACKET NOTATIONS
//can be used to find characters in strings

//examples below for 1st Character
var firstLetterOfFirstName = "";
var firstLetterOfFirstname = "Mr Y3y3";

firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName); //produce 'M'

//-----------Arrays----------------
// Arrays allow to store different pieces of data types

let selectedColors = ["red", "blue", 23.05];
console.log(selectedColors.length);

//adding a 3rd member to array
selectedColors[3] = 100;

//Accessing the nth element of an Array
console.log(selectedColors[2]);

//Nested Arrays
var myArray = [
  ["Bulls", 34],
  ["white sox", 54],
];

//Using array indexes to modify Arrays
var ourArray = [18, 64, 99];
ourArray[1] = 45; /* Our array now is [18, 45, 99] */

//Using array indexes to modify Multiple arrays
var myArrays = [[1, 2, 3][(4, 5, 6, 7)][(8, 9, 10)][([11, 12], 13, 14)]];

var myData = myArrays[0][0]; /* the result is 1 */
var myData = myArrays[1][3]; /* the result is 7 */
var myData = myArrays[3][0][1]; /* the result is 12 */

//Manipulating Arrays with the push function
var oldArray = ["stephen", "J", "Joy"];

/** adding 'John', 3 and 'Joseph' to the oldArray */
oldArray.push(["John", 3, "Joseph"]);

//-----------------functions-------------------
//js functions without parameters
function greet() {
  console.log("hey this is function");
}

greet();

//js functions with parameters
function greets(firstname, lastname) {
  console.log("hello, " + firstname + " " + lastname);
}

greet("joe", "dread");
