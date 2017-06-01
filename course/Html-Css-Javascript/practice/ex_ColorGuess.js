function play_color() {
    array_color = Array(7);
    array_color = ['blue', 'deep brown', 'green', 'purple', 'red', 'white', 'yellow'];
    position = Math.floor(Math.random() * array_color.length);
    target_color = array_color[position];
    alert(target_color);
    count = 0;
    var finished = false;
    var guess_color;

    while (!finished) {
        guess_color = prompt('I am thinking of one of these colors: \n\n' +
            array_color.join(', ') + '\n\n What color am I thinking of? ');
        finished = check_color();
    }


}

/*
function check_color() {
    if (typeof(guess_color) != 'string') {
        alert('Please type some color !');
        return false;
    } else if (array_color.join().indexOf(guess_color) < 0) {
        alert('Sorry, I dont recognize your color. \n\n Please try again');
        return false;
    } else if (array_color.join().indexOf(guess_color) > position) {
        alert('Sorry, your guess is not correct! \n Hint: your color is alphabetically higer than mine. \n Please tyr againg.');
        return false;
    } else if(array_color.join().indexOf(guess_color) < position){
        alert('Sorry, your guess is not correct! \n Hint: your color is alphabetically lower than mine. \n Please tyr againg.');
        return false;
    }else{
        alert('Congratulations! You have guessed the color! \n It took you' + count + 'guesses to finish the game! \n You can see the colour in the backgound.');
    }


}
*/
function check_color() {
    for (var i = 0; i < array_color.length; i++) {
        if (array_color[i] == guess_color) {
            alert('Congratulations! You have guessed the color! \n It took you' + count + 'guesses to finish the game! \n You can see the colour in the backgound.');
            return true;
        } else {
            alert('thinking~');
            return true;
        }
    };

}