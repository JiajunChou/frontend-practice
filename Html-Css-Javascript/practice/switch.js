var person;
person = prompt("台灣誰最有錢?");
switch (person) {
    case ("陳水扁"):
        document.write('如果他可以一直當總統的話，應該就是首富。');
        break;
    case ('郭台銘'):
        document.write('你跟他的身價平均等於他自己的身價平均。');
        break;
    case ('李嘉誠'):
        document.write('如果他把台灣買下來的話');
        break;
    default:
        document.write('永遠是別人');
        break;
}