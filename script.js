
const btn = document.querySelector(`#btn`);
const count = document.querySelector(`h2`);
let countdownTitle = document.querySelector(`h1`);


// Function to get the new location of the button
const runAway = function() {
    const y = Math.floor((window.innerWidth - 100) * Math.random());
    const x = Math.floor((window.innerHeight - 100) * Math.random());
    btn.style.top = `${x}px`;
    btn.style.left =  `${y}px`;
};

//  Variable to count the clicks
let clicks = 0;

// If clicked, the button will count a click and run away
btn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'rgb(107, 0, 0)';
    clicks++;
    runAway();
    count.innerText = `You clicked the button ${clicks} times`
});

// Insure the background stay black even if the button gets a click.
btn.addEventListener('mouseout', function () {
    btn.innerText = `Try to click me`;
    document.body.style.backgroundColor = 'black';
});

// Make the button run away on hover
btn.addEventListener('mouseover', function () {
    btn.innerText = `OOOH MAMA!`;
    runAway();
});

// Function to get the timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}



// Start timer on screen load
window.onload = function () {
    var OneMinutes = 59,
        display = document.querySelector('#time');
    startTimer(OneMinutes, display);
};

// Give the final score once the game is done.
function endGame() {
    count.innerText = `Your score is ${clicks}`;
    countdownTitle.style = 'display: none';
    btn.style = 'display: none';
}



// Time of the game in milliseconds
gameTime(5000)

// End the game once the time is up
function gameTime( t ) {
    setTimeout(endGame, t);
}