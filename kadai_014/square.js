let num;
num = 10;

// 二乗して返却する関数
const squaring = (num) => {
  num = num ** 2;
  return num;
}

console.log(squaring(num));