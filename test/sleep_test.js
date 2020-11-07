// コマンドラインからのjavascript実行コマンド
// $ osascript -l JavaScript sleep_test.js

// 処理時間計測開始
var start_ms = new Date().getTime();

// 自作sleep: busy waitを使う方法
function sleep(waitMsec) {
    var startMsec = new Date();
    // 指定ミリ秒の間ループ処理を実行する
    while (new Date() - startMsec < waitMsec);
}

sleep(6000);

// 処理時間計測終了
var elapsed_ms = new Date().getTime() - start_ms;

// 処理時間の計策結果を表示する
console.log('processing time: ' + elapsed_ms/1000 + ' sec.');
