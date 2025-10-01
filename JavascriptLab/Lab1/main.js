const button = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');

function showMessage() {
    messageParagraph.textContent = "Hello, web app world!";
}

button.addEventListener('click', showMessage);
