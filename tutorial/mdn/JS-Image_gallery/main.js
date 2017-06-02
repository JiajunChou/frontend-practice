var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
var xxx = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];
var srcImage;
for (var i = 0; i < 5; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', xxx[i]);
    thumbBar.appendChild(newImage);
}

function getSrc(elem) {
    var src = elem.getAttribute('src');
    return src;
}


/* Wiring up the Darken/Lighten button */