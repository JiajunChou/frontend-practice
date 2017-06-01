var color = Array(7);
color = ['black', 'cyan', 'gold', 'magneta', 'orange', 'red', 'white'];
var target_index = Math.floor(Math.random() * 7);
target = color[target_index];
var guess_input;
alert(target);

function play_color() {

    var finished = false;

    while (!finished) {
        guess_input = prompt('I am thinking of one of these colors: \n\n' + color.join(', ') + '\n\n What color am I thinking of? ');
        finished = check_color();
    }


}

function check_color() {
    if (guess_input == color[0] || guess_input == color[1] || guess_input == color[2] || guess_input == color[3] || guess_input == color[4] || guess_input == color[5] || guess_input == color[6]) {
        if (guess_input > target) {
            alert('Your color is higher! ');
            return false;
        } else if (guess_input < target) {
            alert('Your color is lower! ');
            return false;
        } else {
            alert('Congratulation !');
            return true;
        }
    } else {
        alert('I dont recognize!');
        return false;
    }

}