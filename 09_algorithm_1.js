// practice with T-diagram
// example 1
var a = 1;
var b = 2;

function xyz(a,b){
    a = a + 10
    b = b + 20
}

console.log(a);
console.log(b);

// example 2: calling function
var a = 1;
var b = 2;

function xyz(a,b){
    a = a + 10;
    b = b + 20;
}

xyz(a,b);

console.log(a);
console.log(b);

// example 3: adding return
var a = 1;
var b = 2;

function xyz(a,b){
    a = a + 10;
    b = b + 20;
    return a + b;
}

var z = xyz(a,b);

console.log(a);
console.log(b);
console.log(z)

// example 4
var a = 1;
var b = 2;

function xyz(a,b){
    console.log(a);
    console.log(b);
    var c = a + b;
    var d = a * 10;
    return c + d;
}

var z = xyz(a + 2, b + 2);

console.log(a);
console.log(b);
console.log(z);

// example 5
function volumn_cylinder(radius, height){
    var pi = 3.14;
    var volumn = pi * radius * radius * height;
    return volumn;
}
var z = volumn_cylinder(5, 10);
console.log(z);


// example 6
function a(){
    console.log('hello');
    var result = b(10);
    return result;
}

function b(y){
    console.log('world');
    return y * 2 + 5;
}

var answer = a();
console.log(answer);

// example 7
function a(x){
    console.log(x);
    a(x - 1);
}

a(100);