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
        }