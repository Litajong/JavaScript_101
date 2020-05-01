// For Loop
for (var num = 0; num <= 5; num ++){
    console.log(num);
}

// above code is shorthand for
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// Loops + Arrays
var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i = i + 1){
    console.log(i);         // prints the index
    console.log(arr[i]);    // prints the array value at that index
}

// Example
for (var i = 0; i < 5; i ++){
    console.log("hello");
}

// Example
for (var x = 5; x < 8; x += 2){
    console.log(x);
}

// Example
for (var a = 5; a > 0; a --){
    a = a - 2;
    console.log(a);
}