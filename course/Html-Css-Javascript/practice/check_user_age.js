function check_user_age() {
    if (user_age() < 18) {
        alert("Please go to another page !");
    }
}

function user_age() {
    var age_text, age;
    age_text = prompt("What is your age? ");
    age = parseInt(age_text);
    return age;
}