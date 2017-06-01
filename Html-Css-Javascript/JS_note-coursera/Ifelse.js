var ans;
ans = prompt("3隻狼抓三隻羊用3分中。今天要用幾隻狼，可以在12分鐘抓12隻羊?");
ans = parseInt(ans);
if (ans == 1) {
    document.write("你一定是一隻呆完郎 !");
} else if (ans == 3) {
    document.write('Yahoooooooo');
} else if (ans == 12) {
    document.write('大家一起不無聊');
} else {
    document.write('Are you serious?');
}