// Challenge 1
for (var num1 = 1; num1 <= 3; num1++){
    for (var num2 = 1; num2 <= 2; num2++){
        console.log('hello');
    }
}

// Challenge 2
for (var num1 = 0; num1 <= 3; num1++){
    for (var num2 = 1; num2 <= 2; num2++){
        if (num1 == 5){
            console.log('hello');
        }
    }
    console.log('world');
}

// Challenge 3
var x = 'hello!';
var y = 'guys';
for (var num1 = 0; num1 <= x.length - 3; num1++){
    for (var num2 = 0; num2 <= y.length - 4; num2++){
        console.log(x + y);
    }
}

// Challenge 4
var msg1 = 'hello';
var msg2 = 'world!';

for (var num1 = 1; num1 <= msg1.length; num1++){
    for (var num2 = 1; num2 <= msg2.length; num2++){ 
            if (msg1.length == 4){
                console.log(msg1 + '' + msg2);
            }
    }
    if (num1 != 4){
        console.log(msg1.length + msg2.length);
    }
}

// Challenge 5
var array = [5, 3, 4, 1]
for (var x = 0; x < array.length; x++){
    for (var y = array.length - 1; y >= x; y--){
        if(array[x] > array[y]){
            var temp = array[y];
            array[y] = array[x];
            array[x] = temp;
        }
    }
}
console.log(array);
