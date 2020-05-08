// Level 2: Challenge 6
var x = [1,2,4];
x[0] = x[1];
console.log(x);

// Level 3: Challenge 5
var x = [1,3,5,8];
var temp = x[x.length - 1];
x[x.length - 1] = x[0];
x[0] = temp;

// Level 4: Challenge 8
var x = [2,4,5];
var counter = 0;

if (x[counter] > 0)
{
    console.log('coding');
    counter = counter + 1;
}
if (x[counter] > 0)
{
    console.log('coding');
    counter = counter + 1;
}
if (x[counter] > 0)
{
    console.log('coding');
    counter = counter + 1;
}
console.log(x);
console.log(counter);