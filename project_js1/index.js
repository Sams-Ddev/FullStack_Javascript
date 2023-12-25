//Javascript fundamentals

// This course teaches the concepts of Javascript as:
// Variables, Dynamic typing, Primitive/Primary value types and
// Reference type : String literal, Number literal, Boolean literal

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
  console.log("hello, " + firstname + "" + lastname);
}

greet("joe", "dread");
