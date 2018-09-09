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

    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    document.getElementById("clock").innerHTML =  year + "/" + month + "/" + date + " (" + week + ")"+ hour + ":" + minute + ":" + second;
}

setInterval(clock, 1000);
