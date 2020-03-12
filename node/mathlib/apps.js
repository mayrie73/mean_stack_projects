var mathlib = require('./mathlib')();     //notice the extra invocation parentheses!
console.log(mathlib);
mathlib.greet();
mathlib.add(5,6);
mathlib.multiply(5,6);
mathlib.square(5);
mathlib.random(10,35);