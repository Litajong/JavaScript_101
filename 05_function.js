// normal code
var a = 7;
var b = 87;
a += 5;
a *= 30;
b *= a;
console.log("The value of a is currently: ",a);
console.log("The value of b is currently: ",b);
a /= 3;
b /= a;
console.log("The value of a is currently: ",a);
console.log("The value of b is currently: ",b);
a *= 27;
b *= 13;
console.log("The value of a is currently: ",a);
console.log("The value of b is currently: ",b);

// change the printvalues code (console.log) to a function
function printValues() {
    console.log("The value of a is currently: ",a);
    console.log("The value of b is currently: ",b);
}

var a = 7;
var b = 87;
a += 5;
a *= 30;
b *= a;
// call function
printValues();
a /= 3;
b /= a;
// call function
printValues();
a *= 27;
b *= 13;
// call function
printValues();