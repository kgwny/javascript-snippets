// コマンドラインからのjavascript実行コマンド
// $ osascript -l JavaScript sleep_test2.js

// 処理時間の計測
var startTime = new Date().getTime();
sleep(60000);
var processTime = new Date().getTime() - startTime;
var min = Math.floor(processTime / 60000);
var sec = Math.floor((processTime - min * 60000) / 1000);
myPrint(min, sec);

// 待機
function sleep(milliseconds) {
    var date = Date.now();
    var currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

// 処理時間のログ出力
function myPrint(min, sec) {
    console.log(`processing time is ${min} min ${sec} sec.`);
}
