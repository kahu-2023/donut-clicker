//Emily

// Total score variable

let totalScore = 0

//Increment variable

let scoreIncrement = 1

//Get element by ID to identify the donut

let donut = document.getElementById('donut')

//Attach an event listener to the donut that runs the increment to increase the score.

donut.addEventListener('click', increment)

//Function to increase score.

function increment() {
    totalScore += scoreIncrement 
}

//Update total score in text content.

function updateTotalScore() {
    donut.textContent = totalScore
}



//Ryan
