function play_game() {
    random_number = Math.floor(Math.random() * 100 + 1);
    low_number = 1;
    high_number = 100;
    count = 1;
    var finished = false;



    while (!finished) {
        guess_number = prompt('猜數字，範圍' + low_number + '~' + high_number + '\n\n');
        guess_number = parseInt(guess_number);
        finished = check();
        count++;
    }

}


function check() {

    if (isNaN(guess_number)) {
        alert('Please Enter a NUMBER !!! \n\n You try ' + count + ' times.');
        return false;
    } else if (guess_number < low_number || guess_number > high_number) {
        alert('Are you serious ?\n\n You try ' + count + ' times.');
        return false;
    } else if (guess_number > random_number) {
        alert(' is too high ! \n\n You try ' + count + ' times.');
        high_number = guess_number;
        return false;
    } else if (guess_number < random_number) {
        alert(' is too low ! \n\n You try ' + count + ' times.');
        low_number = guess_number;
        return false;
    } else {
        alert('Wow You Are So Bored ! \n\n You try ' + count + ' times.');
        return true;
    }

}