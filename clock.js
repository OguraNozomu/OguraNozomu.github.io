function clock()
{
    var weeks = new Array("日","月","火","水","木","金","土");

    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let week = weeks[now.getDay()];
    let hour = now.getHours();
    let minute= now.getMinutes();
    let second = now.getSeconds();

    // 日付時刻文字列のなかで常に2ケタにしておきたい部分はここで処理
    if (month < 10) mo = "0" + month;
    if (date < 10) d = "0" + date;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    document.getElementById("clock").innerHTML =  year + "/" + month + "/" + date + " (" + week + ")"+ hour + ":" + minute + ":" + second;
}

// 上記のclock関数を1000ミリ秒ごと(毎秒)に実行する
setInterval(clock, 1000);
