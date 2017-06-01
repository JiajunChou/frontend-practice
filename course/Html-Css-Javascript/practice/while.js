var respond, finished;
finished = false;
alert('LOL is a great game!');
while (!finished) {
    respond = prompt('Do you agree?');
    if (respond.indexOf('y') == 0) {
        document.write('We have a same hobby!');
        break;
    }
}