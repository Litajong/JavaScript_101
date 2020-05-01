// variables
var userFirstName = "Black";
var userLastName = "Jack";
var userEmail = "jblack@nowhere.com"

// arrays
var user = ["Black","Jack","jblack@nowhere.com"];

// use "push" method to add a value to the end of the array
var user = ["Black","Jack","jblack@nowhere.com"];
user.push("Danny");
console.log(user);      //["Black","Jack","jblack@nowhere.com","Danny"]

// use "pop" method to remove a value from the end of the array
var user = ["Black","Jack","jblack@nowhere.com"];
user.pop();
console.log(user);      //["Black","Jack"]

// use index number to access or update values in an array, with the first value being at index 0
var user = ["Black","Jack","jblack@nowhere.com"];
console.log(user[0]);       //reading the value -- output: Black
user[1] = "Mary";           //updating the value
console.log(user);          //["Black","Mary","jblack@nowhere.com"]

// use "length" to check how many values are contained in the array
var user = ["Black","Jack","jblack@nowhere.com"];
console.log(user.length)    //3
user.pop();
console.log(user.length);   //2 