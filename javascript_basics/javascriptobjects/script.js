var myCar = new Object();
myCar.maxspeed= 50;
myCar.driver="shaun";
console.log(myCar.driver);
myCar.drive = function(){
    console.log('now driving');
}
myCar.drive();

var myCar2={maxSpeed: 50, driver: 'Net Ninja', drive:  function(){
    console.log('now driving');}};
console.log(myCar2.maxSpeed);
myCar.drive();
