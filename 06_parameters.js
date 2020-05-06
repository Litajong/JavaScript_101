// example: place "startnum" for a parameter
function counter(startnum){
    for(var num = startnum; num >= 0; num --){
        console.log(num);
    }
}
counter(6); 
counter(3);


// normal code
var arrOne = [1,2,3,4,5];
var arrTwo = [10,20,30,40,50];
var arrThree = [100,200,300,400,500];

for (var i = 0; i < arrOne.length; i ++){
    console.log(arrOne[i]);
}
for (var j = 0; j < arrTwo.length; j ++){
    console.log(arrTwo[j]);
}
for (var k = 0; k < arrThree.length; k ++){
    console.log(arrThree[k]);
}

// change to function and add parameter
function printArrays(arr){
    for (var i = 0; i < arr.length; i ++){
        console.log(arr[i]);
    }
}
var arrOne = [1,2,3,4,5];
var arrTwo = [10,20,30,40,50];
var arrThree = [100,200,300,400,500];
// call function with adding parameter
printArrays(arrOne)
printArrays(arrTwo)
printArrays(arrThree)