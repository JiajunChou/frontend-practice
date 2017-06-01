// Set color array
var array_color = new Array(7);
array_color = Array(7);
array_color = ['blue', 'deep brown', 'green', 'purple', 'red', 'white', 'yellow'];


var target_index = Math.floor(Math.random() * 7);
target = array_color[target_index];

var guess_input = prompt('I am thinking of one of these colors: \n\n' +
    array_color.join(', ') + '\n\n What color am I thinking of? ');

if (guess_input != )