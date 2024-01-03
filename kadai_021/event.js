// id btnの要素を取得
const btn = document.getElementById('btn');

// イベントリスナーの設定
btn.addEventListener('click', ()=>{

  // 非同期処理
  setTimeout(() => {
      // id textの要素取得して、メッセージ書き換え
      const text = document.getElementById('text');
      text.textContent = 'ボタンをクリックしました'
  },2000);

});