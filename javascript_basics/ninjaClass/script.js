function Person(){
    // attributes
     this. name ="Mary";
     this.age=29;
     this.profession = "student";
     this.favColor= "green";
 //functions
this.sayMyName=function(){
console.log(this.name)
 }
 this.sayMyFavColor=function(){
     console.log(favColor);
 }
}
//prototype functions go outside the class definitio
Person.prototype.sayMyAge =function(){
    console.log(this.age)
}
 var person = new Person();
 console.log(person);
person.sayMyName();
person.sayMyAge();