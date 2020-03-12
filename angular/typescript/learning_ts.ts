//declare types for variables
let myNewStr:string='hello world';
let anyType: any = 10;
anyType= 10;
anyType = true;
anyType ={};
let numVar:number = 10;
let myBoolean:boolean = true;
let myObj:object = {};
//declare arrays
let myNumArray:number[]= [1,2,3,4,5]
let myStrArray:string[]= ["hello", "world"]
let objectArray:object[]= [{name: 'Mary'}, {name:'Cornelius'}];
let anyArray:any[] = [1, "hello", {} ];

//declare function types
//returns nothing
function printToConsole(message:string):void{
    console.log(message);
}
function maxOfArray(arr:number[]):number{
let max = arr[0];
for(let num of arr){
    if(num > max){
       max= num; 
    }
}
return max;
}
maxOfArray([1,4,5,5]);
// classes
class NodeBST{
    value:number;
    left:object=null;
    right:object= null;
    constructor(value){
        this.value = value;

    }
}
// Interfaces
interface UserInterface{
    name:string,
    age:number;
    email:string;
}
function whatever(user:UserInterface){   
}
whatever({name: 'mary', age: 44, email:'mkjones9910@gmail.com'})
console.log("program complete");

