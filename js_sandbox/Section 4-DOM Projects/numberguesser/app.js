/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if lose
- Let player choose to play again
*/

// Set Game values
let min = 1,
    max = 10,
    answer = Math.floor((Math.random() * max) + min);
let remaining_guesses = 3;

// UI vars
const   gameWrapper = document.getElementById('game');
        button = document.getElementById('guess-value'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num')
        guessInput = document.querySelector('#guess-input');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
button.addEventListener('mousedown', function(e){
    if(e.target.classList.contains('play-again')) {
        window.location.reload();
    }
});

// Listen for Submit
button.addEventListener('click', play);

// playTurn
function play() {
    const chances = remaining_guesses - 1;
    console.log(`Answer ${answer} Chances ${chances}`);
    const message = document.getElementById('message');
    let guess = parseInt(guessInput.value);
    
    // Ensure valid input
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
        message.style.display = 'block';
        return
    }

    // WINNER
    if(guess == answer) {
        // Disable Input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = 'green';
        // Set Message
        setMessage(`${guess} is Correct!`, 'green');
        message.style.display = 'block';
        // Change button value and which function is called on click
        button.value = 'PLAY AGAIN';
        button.className = 'play-again';
        // button.removeEventListener('click', play);
        // button.addEventListener('click', reset);
        return
    } else {
        setMessage(`${guess} is incorrect! ${chances} guesses remaining.`, 'red');
    }

    // Clear guess from input field after each submit
    guessInput.value = '';
    // Reduce remaining guesses and declare Game Over if remaining = 0
    remaining_guesses -= 1;

    // GAME OVER
    if(remaining_guesses === 0) {
        // Disable Input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = 'red';
        // Set Message
        setMessage(`Sorry, Game Over. The correct answer was ${answer}`, 'red');
        // Change button value and which function is called on click
        button.value = 'PLAY AGAIN';
        button.className = 'play-again';
        // button.removeEventListener('click', play);
        // button.addEventListener('click', reset);
    }
    message.style.display = 'block';
}

// // reset -- Original manual function to reset game variables before realizing that window.location.reload() was the most optimal solution in this scenario
// function reset(e) {
//     if(e.target.className === 'play-again') {
//         // Hide message response
//         message.style.display = 'none';
//         // Change random number and reset remaining guesses
//         answer = Math.floor((Math.random() * max) + min);
//         remaining_guesses = 3;
//         // return button to original value and restore original event listeners
//         button.value = 'Submit';
//         // button.removeEventListener('click', reset);
//         // button.addEventListener('click', play);
//         window.location.reload();
//     }
//     // Hide message response
//     message.style.display = 'none';
//     // Change random number and reset remaining guesses
//     answer = Math.floor((Math.random() * max) + min);
//     remaining_guesses = 3;
//     // return button to original value and restore original event listeners
//     button.value = 'Submit';
//     button.removeEventListener('click', reset);
//     button.addEventListener('click', play);
// }

// setMessage
function setMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
}