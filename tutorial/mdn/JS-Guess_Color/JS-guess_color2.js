var color = ['black', 'cyan', 'gold', 'magneta', 'orange', 'red', 'white'];

var target_index = Math.floor(Math.random() * color.length);
target = color[target_index];

var guess_input;

alert(target);

function play_color() {
    var finished = false;

    while (!finished) {
        guess_input = prompt('I am thinking of one of these colors: \n\n' + color.join(', ') + '\n\n What color am I thinking of? ');
        if (check_colorType()) {
            finished = order_Alphabetic();
        } else {
            alert('I dont recognize!');
            finished = false;
        }

    }
    document.body.style.backgroundColor = target;



}

function check_colorType() {
    var check_type = false;
    for (var i = 0; i < color.length; i++) {
        if (guess_input == color[i]) {
            check_type = true;
        }
    }
    return check_type;
}

function order_Alphabetic() {
    if (guess_input > target) {
        alert('Your color is Alphabetic Order higher! ');
        return false;
    } else if (guess_input < target) {
        alert('Your color is Alphabetic Order lower! ');
        return false;
    } else {
        alert('Congratulation !');
        return true;
    }
}

/*
function setColor(element, color) {
    element.style.backgroundColor = color;
}
*/
/*
var element = document.getElementById('element');
 element.style.background = '#FF00AA';
 */