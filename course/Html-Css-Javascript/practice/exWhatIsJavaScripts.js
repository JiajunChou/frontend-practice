< html >

    <
    head >
    <
    meta charset = "utf-8" >
    <
    style >
    .pStyle {
        font - family: 'helvetica neue', helvetica, sans - serif;
        letter - spacing: 1 px;
        text - transform: uppercase;
        text - align: center;
        border: 2 px solid rgba(0, 0, 200, 0.6);
        background: rgba(0, 0, 200, 0.3);
        color: rgba(0, 0, 200, 0.6);
        box - shadow: 1 px 1 px 2 px rgba(0, 0, 200, 0.4);
        border - radius: 10 px;
        padding: 3 px 10 px;
        display: inline - block;
        cursor: pointer;
    }

.lastResult {
    color: white;
    padding: 3 px;
} <
/style> <
/head>

<
body >

    <
    script >



    var para = document.querySelector('p');
para.addEventListener('click', updateName);

function updateName() {
    var name = prompt('Enter a new name');
    para.textContent = 'Player 1: ' + name;
}

//Inline JavaScript

var button = document.querySelectorAll('button');

function createParagraph() {
    var para = document.createElement('inline');
    para.textContent = 'You clicked the button! ';
    document.body.appendChild(para);
}

var button = document.querySelectorAll('button');

function removeParagraph() {
    var para = document.querySelectorAll('inline');
    para.textContent.remove();
} <
/script> <
/body>

<
/html>