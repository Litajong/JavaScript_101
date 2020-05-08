// Challenge 1
function a(){
    console.log(5);
}
a();

// Challenge 2
function a(){
    console.log(55);
}

// Challenge 3
a();
function a(){
    console.log(25);
}

// Challenge 4
function a(){
    var b = 25;
    b = b + 10;
    console.log(b);
}
a();

// Challenge 5
function a(b, c){
    console.log(b);
    console.log(c);
}
a(3, 5);

// Challenge 6
function a(b, c){
    return b + c;
}
console.log(a(3,5));

// Challenge 10
function a(b, c){
    return b + c;
}
console.log(a(1, a(2, 3)));

// Challenge 13
function a(b, c){
    console.log(b);
    return b + c;
}
console.log(a(3, 2));

// Challenge 15
function a(){
    return 25;
    return 50;
}
console.log(a());

// Challenge 16
function a(b, c){
    return 25;
    return b + c;
}
console.log(a(3, 2));

// Challenge 18
function a(b, c){
    return 0;
}
console.log(a(a(2, 3), a(1, 1)));