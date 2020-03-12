//Math 1
function zeroNegativity(array){
for (var i=0; i<array.length; i++);{
    if(arr[i] < 0){
        return true;
    } else{
        return false;
    }
}
};
// Math 2
function isEven(x){
    if(x%2===0 === True){
        return true;
    } else{
        return false;
    }
};
//Math 3
function isEven(array){
    for(var i=0; i<array.length; i++){
        if(array[i]===0 ===True){
            return true;
        } else{
            return false;
        }
    }
};
//Math 4
/*function createDummyArray(){

}*/
//Math 5
function random_choice(array){ 
return array[Math.floor(Math.random()*array.length)];    
}
var array = [5,10,11, 12];
console.log(random_choice(array));
