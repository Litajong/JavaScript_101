// function tip
function tip(bill){
    return bill*1.20;
}
var thaiFood = 150;
var group = 4;
// a function call is equal to whatever that function returns
console.log(tip(thaiFood));     //180
var total = tip(thaiFood);
console.log(total / group);     //45

// function createArray
function createArray(num){
    var newArray = [];
    for(var i = 0; i <= num; i++){
        newArray.push(i);
    }
}
createArray(5);

// adding return statement
function createArray(num){
    var newArray = [];
    for(var i = 0; i <= num; i++){
        newArray.push(i);
    }
    return newArray;
}
var y = createArray(5);