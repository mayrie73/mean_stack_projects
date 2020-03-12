class Bike{
    constructor(price, max_speed, miles) {
        this.price = price;
        this.max_speed = max_speed;
        this. miles= miles;
    }
   displayBike(){
        console.log('Price:', this.price, 'Max Speed:', this.max_speed, 'Miles:', this.miles);
        return this;
    }
ride(){
    this.miles = this.miles + 10;
    console.log('Riding', this.miles);
    return this;
}
reverse(){
    if(this.miles >= 5){
        this.miles -=5;
        console.log('Reversing', this.miles);
        return this;
    }else{
     console.log('No more miles to reverse', this.miles);
     return this;
    }
}
}

let bike1 = new Bike(200, 20, 0);
let bike2= new Bike(300, 30, 25);
let bike3 = new Bike(400, 50, 45);

bike1.ride().ride().ride().reverse().displayBike();
bike2.ride().ride().ride().reverse().displayBike();
bike3.ride().ride().ride().reverse().displayBike();





