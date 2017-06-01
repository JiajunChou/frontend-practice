var randon_number = Math.floor(Math.random() * 100 + 1);
var low_number = 1;
var high_number = 100;
var count = 1;

while (true) {
    guess_number = prompt('猜數字' + low_number + ' ~ ' + high_number);
    guess_number = parseInt(guess_number);
    if (guess_number == randon_number) {
        document.write('Congrutation ! The answer is ' + randon_number + ' counts: ' + count);
        break;
    } else if (guess_number > randon_number) {
        alert(guess_number + ' is too high! counts: ' + count);
        high_number = guess_number;
    } else {
        alert(guess_number + " is too low! counts: " + count);
        low_number = guess_number;
    };
    count++;
}