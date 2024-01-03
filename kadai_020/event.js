// id btn の要素を取得
const btn = document.getElementById('btn');

// イベントリスナーの設定
btn.addEventListener('click', () => {

  // id text の要素を取得し、textを書き換え
  const text = document.getElementById('text');
  text.textContent = 'ボタンをクリックしました';

});