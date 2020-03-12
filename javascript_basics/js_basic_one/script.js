//Basic 1
var x= [];
console.log(x);
x.push("coding", "dojo", "rocks");
x.pop();
console.log(x);

//Basic 2
const y = [];
y.push(88);
console.log(y);
// answer after console.log = [ 88 ]*/

//Basic 3
// print every element to the console

var z = [9,10,6,5,-1, 20, 13, 2]
for(var i =0; i< z.length; i++){
 console.log(z[i]);
}
//print every element except the final number
var z = [9,10,6,5,-1, 20, 13, 2]
for(var i =0; i< z.length-1; i++){
 console.log(z[i]);
}
//Basic 4
// Print the length of all names to the console.
var names=['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
console.log(names);

var names=['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (var i=0;i<names.length;i++){
    console.log(names[i].length);
}

// Print only names with a length of 5:
var names=['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for(var i=0; i<names.length; i++){
if (names[i].length===5){
    console.log(names[i]);  
}
};

//Basic 5
// create a function yell that takes one paramete string:
// make yell return that string in uppercase:
function yell(string){
console.log(string.toUpperCase());
}
return yell("hello, world. i am yelling in uppercase!");
//Where could you look to find out more about uppercasing strings in JavaScript?
// answer: MDN Web Docs and W3Schools

