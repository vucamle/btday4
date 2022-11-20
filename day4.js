 //bt1
 
 let a = '12';
 console.log(Number.isFinite(a) && Number.isNaN(a));




//bt3
let ages = [3,3,4];

function checkAge(age) {
  return age != 3;
}
let age = ages.find(checkAge);
console.log(age); 