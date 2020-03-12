module.exports = function () {
    return {
        greet: function () {
            console.log("we are now using a module!");
        },
        add: function (num1, num2) {
            console.log("the sum is:", num1 + num2);
        },
        multiply: function (num1, num2) {
            console.log("the sum is:", num1 * num2);
        },
        square: function (num) {
            console.log("the square of the number is:", num = Math.pow(num, 2))
        },
        random: function (num1, num2) {
            console.log("the random number is:", Math.floor(Math.random() * (num2 - num1 + 1) + num1));
        }
    }
};