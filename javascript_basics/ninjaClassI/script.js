//attributes: name, health, speed(private), strength(private)
function Ninja(name) {
    //speed and strength are 3 by default, health is 100 by default
    let speed = 3;
    let strength = 3;
    let health = 100;
    this.name = name;
    //method: sayName() log Ninja's name
    Ninja.prototype.sayName = function() {
        console.log("My ninja name is " + this.name + "!");
        return this
    };
    //method: showStats() show ninja's strength, speed, and health
    Ninja.prototype.showStats = function() {
        console.log("Name: " + this.name + ", Health: " + health + ", Speed: " + speed + ", Strength: " + strength)
        return this
    }
    // method: drinkSake() add 10 health to ninja
    Ninja.prototype.drinkSake = function() {
        health += 10;
        return health
    };
}
/*---------- example output:-------- */
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
console.log(ninja1.drinkSake());