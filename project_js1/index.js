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

//---------------variables Concept

let name = Kwadjo;
let age = 30;

//Lets put thesse variables inside of object
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
let selectedColors = ["red", "blue"];
console.log(selectedColors.values);

//adding a 3rd member to array
selectedColors[3] = 23;

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
