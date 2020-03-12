/*for(let i=0; i<7; i++){
    console.log("hello");
};*/
let total = 0;
/*for(let i = 10; i > 0; i--){
    total = total + i;
}
console.log(total);*/
// While Loops
/*let num = 1;
while (num < 6){
    console.log("I'm counting! The number is " + num);
    num = num + 1;
}
console.log("We are done. Goodbye world!");*/
// do/while Loops
/*let num = 6;
do {
    console.log("I'm counting! The number is " + num);
    num = num + 1;
}
while (num < 6);
console.log("We are done. Goodbye world!");*/

//iteration with Loops
//for
/*let colors = ['blue', 'green', 'red', 'chartreuse'];
// a simple array of strings
for(let i = 0; i < colors.length; i++){
// by using the length of our colors array, we can make the condition 
// of our for loop match the number of elements in the array!
    console.log(colors[i]);
    // now we can use i to log the elements of the color array individually
};*/

//Break and Continue
//Break
/*let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
for(let i = 0; i < names.length; i++){
    if(names[i] === 'Kadie'){
        console.log('Kadie is in our array!');
        break;
    }
}
console.log('We finished looping!');*/
let names = ['Anna', 'Oscar', 'Kadie', 'Steve', 'Elle', 'Boris', 'Lord Humongous'];
for(let i = 0; i < names.length; i++){
    if(names[i] === 'Steve'){ continue };
    console.log(names[i]);
};


