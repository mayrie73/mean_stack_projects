//Create a function called starString() that takes a number and returns a string of that many *. For example:
function starString(num){
  string = '';
  for(let i=0; i<num; i++){
    string +='*';
  }
  return string;
}
console.log(starString(8));
//Create a function called drawStars() that takes an array of numbers and prints out *
function drawStars(arr){
  for(let i=0; i<arr.length ; i++){
    console.log(starString(arr[i]));
  }
  return arr;
};
console.log(drawStars([4, 6, 1, 3, 5, 7, 25]));

// Part III
function starString(num){
  let newStr = "";
  for(let i = 0; i<num; i++){
    newStr += "*";
  }
  return newStr;
};
function drawStars(arr){
  let newArr = [];
  for(let i = 0; i<arr.length; i++){
    if(typeof arr[i] === 'number'){
      newArr.push(starString(arr[i]))
    }else if(typeof arr[i] === 'string'){
      let newStr = "";
      for(let j = 0; j < arr[i].length; j++){
        newStr += arr[i][0].toLowerCase();
      }
      newArr.push(newStr);
    }
  }
  return newArr;
}
console.log(drawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]));