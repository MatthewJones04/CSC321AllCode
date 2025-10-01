import { WORDS } from "./words.js";

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)

function initBoard() {
    let board = document.getElementById("game-board");

    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        let row = document.createElement("div");
        row.className = "letter-row";
        for (let j = 0; j < 5; j++) {
            let box = document.createElement("div");
            box.className = "letter-box";
            row.appendChild(box);
        }  
        board.appendChild(row);
    }
}

initBoard();

document.addEventListener("keyup", (e) => {
    if (guessesRemaining === 0) {
        return;
    }

    let pressedKey = String(e.key);
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter();
        return;
    }

    if (pressedKey === "Enter") {
        checkGuess();
        return;
    }

    let found = pressedKey.match(/[a-z]/gi);
    if (!found || found.length > 1) {
        return;
    } else {
        insertLetter(pressedKey);
    }
})

function insertLetter(pressedKey) {
    if (nextLetter === 5) {
        return;
    }
    pressedKey = pressedKey.toLowerCase();

    let row = document.getElementsByClassName("letter-row")[NUMBER_OF_GUESSES - guessesRemaining];
    let box = row.children[nextLetter];

    animateCSS(box, 'pulse');
    box.textContent = pressedKey;
    box.classList.add("filled-box");
    currentGuess.push(pressedKey);
    nextLetter += 1;
}

function deleteLetter() {
    let row = document.getElementsByClassName("letter-row")[NUMBER_OF_GUESSES - guessesRemaining];
    let box = row.children[nextLetter - 1];
    box.textContent = "";
    box.classList.remove("filled-box");
    currentGuess.pop();
    nextLetter -= 1;
}

function checkGuess() {
    let row = document.getElementsByClassName("letter-row")[NUMBER_OF_GUESSES - guessesRemaining];
    let guessString = "";
    let rightGuess = Array.from(rightGuessString);

    for (const val of currentGuess) {
        guessString += val;
    }
    if (guessString.length != 5) {
        toastr.error("Not enough letters!");
        return;
    }

    if (!WORDS.includes(guessString)) {
        toastr.error("Word not in list!");
        return;
    }

    for (let i = 0; i < 5; i++) {
        let letterColor = "";
        let box = row.children[i];
        let letter = currentGuess[i];

        let letterPosition = rightGuess.indexOf(currentGuess[i]);
        // is letter in the correct guess
        if (letterPosition === -1) {
            letterColor = "grey";
        } else {
            // now, letter is definitely in word
            // if letter index and right guess index are the same, color green
            if (currentGuess[i] === rightGuess[i]) {
                letterColor = "green";
            } else {
                letterColor = "orange";
            }

            rightGuess[letterPosition] = "#";
        }

        let delay = 250 * i;
        setTimeout(() => {
            //flip box
            animateCSS(box, 'flipInX');

            //shade box
            box.style.backgroundColor = letterColor;
            shadeKeyBoard(letter, letterColor);
        }, delay);
    }

    if (guessString === rightGuessString) {
        toastr.success("You guessed right! Game over!");
        guessesRemaining = 0;
        return;
    } else {
        guessesRemaining -= 1;
        currentGuess = [];
        nextLetter = 0;

        if (guessesRemaining === 0) {
            toastr.error("You've run out of guesses! Game over!");
            toastr.info(`The right word was: "${rightGuessString}"`);
        }
    }
}

function shadeKeyBoard(letter, color) {
    for (const elem of document.getElementsByClassName("keyboard-button")) {
        if (elem.textContent === letter) {
            let oldColor = elem.style.backgroundColor;
            if (oldColor === "green") {
                return;
            }

            if (oldColor === "orange" && color !== "green") {
                return;
            }

            elem.style.backgroundColor = color;
            break;
        }
    }
}

document.getElementById("keyboard-cont").addEventListener("click", (e) => {
    const target = e.target;
    if (!target.classList.contains("keyboard-button")) {
        return;
    }
    let key = target.textContent;

    if (key === "Del") {
        key = "Backspace";
    }

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
})

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it    
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        // const node = document.querySelector(element);
        const node = element;
        node.style.setProperty('--animate-duration', '0.3s');

        node.classList.add(`${prefix}animated`, animationName);
        
        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }  

        node.addEventListener('animationend', handleAnimationEnd, {once: true});
    }   
);


// Dark Mode //

function setDarkMode(enabled){
    if(enabled){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // save preference to localStorage
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); // save preference to localStorage
    }
}

const darkModeButton = document.getElementById('dark-mode-toggle');

// Load preference from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    setDarkMode(savedTheme === 'dark');
}

darkModeButton.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    setDarkMode(!isDark);
});


// Gen Z Mode //

function setGenZMode(enabled) {
    const iframe1 = document.getElementById('yt-frame-1');
    const iframe2 = document.getElementById('yt-frame-2');
    const iframe3 = document.getElementById('yt-frame-3');


    if (enabled) {
        document.documentElement.setAttribute('data-genz', 'true');
        localStorage.setItem('genzMode', 'true');

        // Reload with autoplay on
        iframe1.src = "https://www.youtube.com/embed/Lixl3-jz7k8?mute=1&autoplay=1";
        iframe2.src = "https://www.youtube.com/embed/zZ7AimPACzc?mute=1&autoplay=1";
        iframe3.src = "https://www.youtube.com/embed/0c4KWfPhgWA?mute=1&autoplay=1";
    } else {
        document.documentElement.setAttribute('data-genz', 'false');
        localStorage.setItem('genzMode', 'false');

        // Reset to just muted, no autoplay
        iframe1.src = "https://www.youtube.com/embed/Lixl3-jz7k8?mute=1";
        iframe2.src = "https://www.youtube.com/embed/zZ7AimPACzc?mute=1";
        iframe3.src = "https://www.youtube.com/embed/0c4KWfPhgWA?mute=1";
    }

}

const button = document.getElementById('genz-toggle');

// Load saved preference
const saved = localStorage.getItem('genzMode');
if (saved === 'true') {
    setGenZMode(true);
}

// Toggle on click
button.addEventListener('click', () => {
    const isActive = document.documentElement.getAttribute('data-genz') === 'true';
    setGenZMode(!isActive);
});
