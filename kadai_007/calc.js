let num;
let mulOfThree;
let mulOfFive;

num = 3;
mulOfThree = num % 3;
mulOfFive = num % 5;

if (mulOfThree === 0 || mulOfFive === 0) {
  if (mulOfThree !== 0) {
    console.log("5の倍数です");
  } else if (mulOfFive !== 0){
    console.log("3の倍数です");
  } else {
    console.log("3と5の倍数です");
  }
} else {
  console.log(num);
}
