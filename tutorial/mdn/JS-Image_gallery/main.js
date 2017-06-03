var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
btn.setAttribute('onclick', "light()");
var overlay = document.querySelector('.overlay');

var imgAddress = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];
inputImage();

/* Looping through images */
function inputImage() {
    for (var i = 0; i < 5; i++) {
        var newImage = document.createElement('img');
        newImage.setAttribute('src', imgAddress[i]);
        newImage.setAttribute('onclick', "srcImage(event)");
        thumbBar.appendChild(newImage);
    }
}

function srcImage(event) {
    var e = event.target;
    var src = e.getAttribute('src');
    displayedImage.src = src;
}

/* Wiring up the Darken/Lighten button */
function light() {
    text = btn.getAttribute('class');
    if (text == 'dark') {
        btn.setAttribute('class', 'light');
        btn.innerText = 'Lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute('class', 'dark');
        btn.innerText = 'Darken';
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    };
}