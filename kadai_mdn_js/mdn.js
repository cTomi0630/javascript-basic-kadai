let year;
let month;
let day;

// Dateコンストラクタの初期値に当日日付を設定
const now = new Date(Date.now());

year = now.getFullYear();
month = now.getMonth() + 1;
day = now.getDay();

console.log(year + "年" + month + "月" + day + "日");